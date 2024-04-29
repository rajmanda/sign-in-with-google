import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare const google: any;  // Needed for Google authentication methods

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public username: string = "";
  public password: string = "";

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
