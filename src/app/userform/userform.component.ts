import { Component, OnInit } from '@angular/core';

@Component({//decorator
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = { //state
    firstName: "Pariwesh", age:10, gender:"Male"
  }
  users = [{ //state
    firstName: "Ram", age:10, gender:"Male"
  }];
  save() {
    console.log('worked');
    console.log(this.user.firstName);
    this.users.push(this.user);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
