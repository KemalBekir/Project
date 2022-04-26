import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem } from './interfaces';
import { UserService } from './user.service';

const apiUrl = environment.apiUrl;

@Injectable()
export class CatalogService {
  constructor(private http: HttpClient, private userService: UserService) {}

  addItem$(body: { item: string }): Observable<IItem> {
    const token = JSON.parse(sessionStorage.getItem('authToken'));
    if (token) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': token,
      });
      let options = { headers: headers };

      return this.http.post<IItem>(
        `${apiUrl}/data/catalog`,
        JSON.stringify(body), options
     /* {withCredentials: true} */
      );
    }
  }

  loadItemsList(): Observable<IItem[]> {
    let item =  this.http.get<IItem[]>(`${apiUrl}/data/catalog`);
    console.log('LoadItem',item);

     return item;
  }

  loadItemById(id: string): Observable<IItem> {
    return this.http.get<IItem>(`${apiUrl}/data/catalog/${id}`);
  }

  loadTopFive(): Observable<IItem[]>{
    let item = this.http.get<IItem[]>(`${apiUrl}/data/catalog/top5`);
    return item;
  }
}
