import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const token = this.userService.getToken();
    if (token) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': token,
      });
      let options = { headers: headers };

      return this.http.post<IItem>(
        `${apiUrl}/data/catalog`,
        JSON.stringify(body),
        options
        /* {withCredentials: true} */
      );
    }
  }

  deleteItem(id: string): Observable<IItem> {
    const token = this.userService.getToken();
    if (token) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': token,
      });
      let options = { headers };

      return this.http.delete<IItem>(`${apiUrl}/data/catalog/${id}`, options);
    }
  }

  editItem(itemId: string, body: { item: string }): Observable<IItem> {
    const currentUser = sessionStorage.getItem('_id');
    const token = this.userService.getToken();
    if (token) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': token,
      });

      let options = { headers };
      return this.http.put<IItem>(
        `${apiUrl}/data/catalog/${itemId}`,
        JSON.stringify(body),
        options
      );
    }
  }

  loadItemsList(): Observable<IItem[]> {
    let item = this.http.get<IItem[]>(`${apiUrl}/data/catalog`);

    return item;
  }

  loadAllMyAds(): Observable<IItem[]> {
    const token = this.userService.getToken();
    if (token) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': token,
      });

      let options = { headers };
      return this.http.get<IItem[]>(`${apiUrl}/data/catalog/myAds`, options);
    }
  }

  loadItemById(id: string): Observable<IItem> {
    return this.http.get<IItem>(`${apiUrl}/data/catalog/${id}`);
  }

  loadTopFive(): Observable<IItem[]> {
    let item = this.http.get<IItem[]>(`${apiUrl}/data/catalog/top5`);
    return item;
  }

  searchItems(term: string): Observable<IItem[]> {
    const params = new HttpParams().set('text',`${term}`);
    let itemList = this.http.get<IItem[]>(`${apiUrl}/data/catalog/search`, { params });
    return itemList;
  }
}
