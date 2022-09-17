import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';
import {UserModel} from '../../model/user-model';

@Component({
  selector: 'app-list-machines-users',
  templateUrl: './list-machines-users.component.html',
  styleUrls: ['./list-machines-users.component.css']
})
export class ListMachinesUsersComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      data => this.users = data
    )
  }

}
