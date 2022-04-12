import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class CatalogService {
  constructor(private http: HttpClient) {}

  addItem$(body: { item: string }): Observable<IItem> {
    return this.http.post<IItem>(
      `${apiUrl}/data/catalog`,
      body /* {withCredentials: true} */
    );
  }
}
