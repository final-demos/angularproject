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
  users:any = [];
  save() {
    const observable = this.service.createUser(this.user);
    observable.subscribe((response) => { //success handler, 200-399
      this.users.push(this.user);
    },
      error => {//error handler, 400 to 599
        alert(error.message);
      });
  }
  constructor(private service: UserService) { }

  ngOnInit(): void {
    const observable = this.service.getUsers();
    observable.subscribe(response =>{
      console.log(response);
      this.users = response;
    },
    error=>{

    })
  }

}
