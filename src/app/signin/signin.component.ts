import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.scss']
})
export class SignInComponent {
  user = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    name: ''
  });
  constructor(private authService: AuthService,private router:Router, private formBuilder: FormBuilder) {}
  signin() {
    if (this.user.invalid) {alert('Llene los campos correctamente');return;}
    this.authService.signIn(this.user.value).subscribe((res)=>{ 
      localStorage.setItem('token',res.token);
      localStorage.setItem('username',res.name);
      localStorage.setItem('image',res.image);
      localStorage.setItem('id',res.id);
      console.log(res.name);
      this.goToIncio();
    },
    (error) => {
      alert(error.error.message);
    });
  }
  goToSignup()
  {
    this.router.navigate(['signup']);
  }
  goToIncio()
  {
    this.router.navigate(['inicio']);
  }
}
