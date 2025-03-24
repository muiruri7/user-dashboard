import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('id');
    if (userIdParam) {
      const userId = +userIdParam;
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }
}
