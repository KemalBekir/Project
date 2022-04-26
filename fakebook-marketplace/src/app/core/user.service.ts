import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';
import { tap, map } from 'rxjs/operators';

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  tel?: string;
}

@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user
  }

  constructor(private httpClient: HttpClient) {}

  login$(userData: { email: string; password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/users/login`, userData, {
        // withCredentials: true,
        observe: 'response',
      })
      .pipe(
        map((response) => response.body),
        tap((user) => this.user = user),
        tap((user) => this.setUserData(user))
      );
  }

  setUserData(user: any) {
    if (user) {
      sessionStorage.setItem('email', JSON.stringify(user.email));
      sessionStorage.setItem('_id', JSON.stringify(user._id));
      sessionStorage.setItem('authToken', JSON.stringify(user.accessToken));
    }
    return user;
  }

  getToken(): string {
    return JSON.parse(sessionStorage.getItem('authToken'));
  }

  getProfileInfo(): Observable<any> {
    const token = JSON.parse(sessionStorage.getItem('authToken'));

    if(token){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': token,
      });
      let options = { headers };
      return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, options).pipe(tap((user) => this.user = user));
    }
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient
      .post<IUser>(
        `${environment.apiUrl}/users/register`,
        userData
        // { withCredentials: true }
      )
      .pipe(
        tap((user) => this.user = user),
        tap((user) => this.setUserData(user))
        );
  }

  logout$(){
    const token = JSON.parse(sessionStorage.getItem('authToken'));
    if (token) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': token,
      });
      let options = { headers: headers };

      return this.httpClient.get<void>(`${environment.apiUrl}/users/logout`, options).pipe(
        tap(() => this.user = null),
        tap(() => sessionStorage.clear())
      );
    }


  }

//   handleLogin(newUser: IUser) {
//     this._currentUser.next(newUser);
//   }

//   handleLogout() {
//     this._currentUser.next(undefined);
//   }
// }
}
