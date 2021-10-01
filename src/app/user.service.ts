import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//decorator
const URL = 'http://localhost:3000/users/';
@Injectable({ //@Service
  providedIn: 'root'
})
export class UserService {
  getSkills() {
    return this.http.get('http://localhost:3000/skills');
  }
  deleteUser(userid: number) {
    return this.http.delete(URL+userid);
  }
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
