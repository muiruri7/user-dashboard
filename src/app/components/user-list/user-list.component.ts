import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchText: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  viewDetails(user: User): void {
    console.log('Viewing details for:', user);
    this.router.navigate(['/user', user.id]);
  }
}
