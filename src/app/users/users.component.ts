import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from './users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: Array<any>

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
      this.userService.getAll().subscribe(data => {
        this.users = data
      })
  }
  
  createUser(user: any): any{
    this.userService.save(user).subscribe(data => {
        return data
    })
  }

}
