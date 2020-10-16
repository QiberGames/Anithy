import { Component, OnInit } from '@angular/core';
import { faApple, faDiscord, faFacebook, faGoogle, faMicrosoft, faTwitch } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faTwitch = faTwitch;
  faDiscord = faDiscord;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faMicrosoft = faMicrosoft;
  faApple = faApple;
  constructor() { }

  ngOnInit(): void {
  }

}
