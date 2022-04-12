import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';
import { StorageService } from './storage.service';
import { tap, map, first } from 'rxjs/operators';

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  tel?: string;
}

@Injectable()
export class UserService {
  currentUser: IUser;

  constructor(
    private storage: StorageService,
    private httpClient: HttpClient
  ) {}

  login$(userData: { email: string; password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/users/login`, userData, {
        // withCredentials: true,
        observe: 'response',
      })
      .pipe(
        tap(response => console.log('----> Login',response)),
        map(response => response.body ),
        tap(user => (this.currentUser = user)),
      );

  }

  setUserData(user: IUser){
    localStorage.setItem('userData', JSON.stringify(user));
    return  console.log(localStorage.getItem('userData'));

  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.apiUrl}/users/register`,
      userData,
      // { withCredentials: true }
    )
  }
}
