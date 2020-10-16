import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faHome,faUsers } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faUsers = faUsers;
  constructor() { }

  ngOnInit(): void {
  }

}
