import { Component, OnInit } from '@angular/core';

import { faTwitch, faDiscord, faGoogle, faFacebook, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faTwitch = faTwitch;
  faDiscord = faDiscord;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faMicrosoft = faMicrosoft;
  faApple = faApple;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  loginType = 'default';
  constructor(public auth: AuthService) { }

  ngOnInit(): void {

  }

}
