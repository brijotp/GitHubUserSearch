import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {

  private usersUrl = 'https://api.github.com/users';
  private searchUrl = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  fetchUsers(query?: string): Observable<any> {
    let params = new HttpParams().set('per_page', '50');

    if (query) {
      return this.http.get(`${this.searchUrl}?q=${query}`, { params });
    } else {
      return this.http.get(this.usersUrl, { params });
    }
  }
}
