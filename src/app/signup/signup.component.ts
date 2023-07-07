import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  user = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    image: '',
  });
  constructor(private authService: AuthService,private router:Router, private formBuilder: FormBuilder) {   
  }

  signup() {
    if (this.user.invalid) {alert('Llene los campos correctamente');return;}
    this.authService.signUp(this.user.value).subscribe((res)=>{
      localStorage.setItem('token',res.token);
      localStorage.setItem('username',res.name);
      localStorage.setItem('image',res.image);
      localStorage.setItem('id',res.id);
      console.log(res.name);
      this.goToInicio();
    },
    (error) => {
      alert(error.error.message);
    });
  }
  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 40;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, 40, 40);
        const base64Data: string = canvas.toDataURL('image/jpeg').split(',')[1];
        console.log(base64Data);
        this.user.value.image = base64Data;/////////////
      };
      img.src = reader.result as string;
    };

  }
  
  goToSignIn() {
    this.router.navigate(['signin']);
  }

  goToInicio() {
    this.router.navigate(['inicio']);
  }
 
}
