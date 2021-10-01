import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//decorator
const URL = 'http://localhost:3000/users';
@Injectable({ //@Service
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  createUser(user: any) {
    return this.http.post(URL,
      user,//request body
      {
        headers: {
          'content-type': 'application/json'
        }
      })
  }
  getUsers() {
    return this.http.get(URL);
  }
}
