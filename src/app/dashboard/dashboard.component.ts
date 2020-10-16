import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { faHome,faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faHome = faHome;
  faUsers = faUsers;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
