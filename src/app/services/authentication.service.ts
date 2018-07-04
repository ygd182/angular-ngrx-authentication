import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  testUser: User = {email: 'user@email.com',password: '1234', token: 'sampleToken'};

  constructor() { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    return token != null;
  }

  login(email: string, password: string): Observable<any> {
    //this a mocked response to be able to test the example
    return new Observable((observer) => {
      console.log (email, this.testUser.email, password, this.testUser.password);
      if (email === this.testUser.email && password === this.testUser.password) {
        observer.next({email: this.testUser.email, token: this.testUser.token});
      } else {
        observer.error("401");
      }
      observer.complete();
    });
    //this would probable make an http post to the server to process the login
    //return this.http.post<User>(url, {email, password});
  }

}
