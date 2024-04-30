import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { UserCardComponent } from "../user-card/user-card.component";
import { CommonModule } from "@angular/common";

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider' ;
import { AuthService } from "../auth.service";



declare var handleSignout: any; // Declare the global function to avoid TypeScript errors

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserCardComponent, MatCardModule, MatButtonModule, RouterModule, MatIconModule, MatToolbarModule, MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userProfilex: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userProfilex = this.authService.getUserProfile();
  }

  handleSignOut() {
    this.authService.signOut();
  }
}
