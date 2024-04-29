import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {

  constructor() { }
  @Input() userProfile: any;

  ngOnInit() {
  }

}


