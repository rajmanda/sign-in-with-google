import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {

  // constructor() { }
  // @Input() userProfile: any;

  // ngOnInit() {
  // }

  userProfile: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userProfile = this.authService.getUserProfile();
  }
}


