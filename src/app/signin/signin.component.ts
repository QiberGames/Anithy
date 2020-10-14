import { Component, OnInit } from '@angular/core';

import { faTwitch, faDiscord, faGoogle, faFacebook, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  faTwitch = faTwitch;
  faDiscord = faDiscord;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faMicrosoft = faMicrosoft;
  faApple = faApple;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  loginType = 'default';
  constructor() { }

  ngOnInit(): void {

  }

}
