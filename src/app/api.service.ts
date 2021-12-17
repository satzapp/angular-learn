import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serviceURL: string = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  getUser(queryString: string = null): Object {
    let params = new HttpParams();
    params.set('q', queryString);
    return this.http.get(this.serviceURL, { params: params });
  }
}
