import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/auth/_services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
