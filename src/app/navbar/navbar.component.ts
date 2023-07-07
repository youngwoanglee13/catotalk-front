import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NewPostService } from '../newpost/newpost.service';
import { AuthService } from '../services/auth.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  formData: FormData = new FormData();
  nuevoPost = this.formBuilder.group({
    description: ['',Validators.required],
    date: [''],
    image: [null as any] 
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private newPostService: NewPostService,
    public authService: AuthService){
  }

  async handleFileInput(event: any) {
    const file: File = event.target.files[0];
    const resizedFile = await new Promise<File>((resolve) => {
      const img = new Image();
      const reader = new FileReader();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = 400;
          canvas.height = 400;
          ctx.drawImage(img, 0, 0, 400, 400);
          canvas.toBlob((blob) => {
            if (blob) {
              const resizedImage = new File([blob], file.name, { type: file.type });
              resolve(resizedImage);
            }
          }, file.type);
        }
      };
      reader.onloadend = () => {
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    });
    this.formData = new FormData();
    this.formData.append('file', resizedFile);

  }
  logout() {
    this.authService.logout();
    alert("Se cerro Sesion correctamente");
  }

  newPost() {
    if(!this.authService.isLogged()) {this.router.navigate(['signin']);return;}
    if(!this.nuevoPost.valid){alert("Ingrese una descripcion") ;return;}
    const post = new FormData();
    this.nuevoPost.value.date = DateTime.now().toFormat('H:mm dd MMM yyyy');
    post.append('description', this.nuevoPost.value.description || '') ;
    post.append('date', this.nuevoPost.value.date);
    post.append('file', this.formData.get('file') || '');
    this.newPostService.newPost(post).subscribe((res)=>{console.log(res);this.nuevoPost.reset();})
  }
}
