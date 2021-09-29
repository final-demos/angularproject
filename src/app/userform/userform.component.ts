import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({//decorator
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = { //state
    firstName: "Pariwesh", age: 10, gender: "Male"
  }
  users = [{ //state
    firstName: "Ram", age: 10, gender: "Male"
  }];
  save() {
    const observable = this.service.createUser(this.user);
    observable.subscribe((response) => { //success handle, 200-399
      this.users.push(this.user);
    },
      error => {
        alert(error.message);
      })
  }
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

}
