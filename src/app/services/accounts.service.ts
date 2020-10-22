import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private baseUrl = environment.apiBaseUrl + '/account';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + '/login', model);
  }
}
