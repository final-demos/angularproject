import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({//decorator
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user: any = { //state
    firstName: "Pariwesh", age: 10, gender: "Male"
  }
  users: any = [];
  save() {
    if (!this.validate()) {
      return;
    }
    const observable = this.service.createUser(this.user);
    observable.subscribe((savedUser) => { //success handler, 200-399
      this.users.push(savedUser);
      this.user = {};
    },
      error => {//error handler, 400 to 599
        alert(error.message);
      });
  }
  constructor(private service: UserService) { }
  deleteUser(userid: number, index: number) {
    if (confirm("are you sure?")) {
      const observable = this.service.deleteUser(userid);
      observable.subscribe(response => {
        this.users.splice(index, 1)
      });
    }
  }
  ngOnInit(): void {
    const observable = this.service.getUsers();
    observable.subscribe(response => {
      console.log(response);
      this.users = response;
    },
      error => {

      })
  }
  validate(): boolean {
    let outcome: boolean = true;
    if (!this.user.firstName) {
      alert('First name is mandatory');
      outcome = false;
    }
    return outcome;
  }
}


