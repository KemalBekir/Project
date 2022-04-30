import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  isLoginFailed: boolean = false;
  isLoggedIn: boolean = false;

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

  }



  handleLogin(): void {
    this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe({
      next: () => {
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        if (this.activatedRoute.snapshot.queryParams['redirect-to']) {
          this.router.navigateByUrl(
            this.activatedRoute.snapshot.queryParams['redirect-to']
          );
        } else {
          this.router.navigate(['/home']);
        }
      },
      complete: () => {
        this.toastr.success('You logged in successfully');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.toastr.error(err.message);

        this.isLoginFailed = true;
      },
    });
  }
}
