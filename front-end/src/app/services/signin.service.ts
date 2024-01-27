// signin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SigninService {
  private apiUrl = 'http://localhost:5038/api/signin'; // Update with your server URL

  constructor(private http: HttpClient) {}

  signin(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.apiUrl, body);
  }
}


