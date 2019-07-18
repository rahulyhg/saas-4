import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/auth/_services/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseAuthenticationService } from 'src/app/core/auth/_services/firebaseAuthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    public authFirebase: FirebaseAuthenticationService) { }

  loginForm: FormGroup

  ngOnInit() {
    this.carregarValidacao();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls }

  onSubmit() {
    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl])
        },
        error => {
          alert("errou");
        }
      )
  }

  carregarValidacao() {
    this.loginForm = this.fb.group({
      email: ['asc@email.com'],
      password: ['asc#1234']
    });
  }

}
