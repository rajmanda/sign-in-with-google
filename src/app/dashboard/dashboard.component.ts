import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserCardComponent } from "../user-card/user-card.component";
import { CommonModule } from "@angular/common";
declare var handleSignout: any; // Declare the global function to avoid TypeScript errors

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  userProfilex: any;
  ngOnInit() {
    this.userProfilex = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
  }
  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }
}
