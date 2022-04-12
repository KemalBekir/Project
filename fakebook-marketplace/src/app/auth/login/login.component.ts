import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required,]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private storage: StorageService) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe({
      next: () => {

        this.router.navigate(['/home']);
      },
      complete: () => {
        console.log('----->', this.userService.currentUser);

        console.log('login stream completed');

      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })

  }
}
