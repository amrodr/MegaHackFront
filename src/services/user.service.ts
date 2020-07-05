import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  public signIn(credentials) {
    return this.http.post(`${this.baseURL}/user`, credentials);
  }

  public getUser() {
    return this.http.get(`${this.baseURL}/user`);
  }

}
