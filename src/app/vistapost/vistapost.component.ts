import { Component } from '@angular/core';
import { NewPostService } from '../newpost/newpost.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-vistapost',
  templateUrl: './vistapost.component.html',
  styleUrls: ['./vistapost.component.scss']
})
export class VistapostComponent {
  selectedPost: any;
  isPopupOpen=false;
  constructor(public newPostService: NewPostService, private router: Router, private authService : AuthService) { }
  ngOnInit(): void {
    this.newPostService.getAllPost().subscribe();
  }

  redirigir(idPost:number){
    this.router.navigate(['inicio/'+ idPost]);
  }
  redirigirNewPost(){
    this.router.navigate(['newpost']);
  }

  openPopup(idPost: number) {
    if(!this.authService.isLogged()) {this.router.navigate(['signin']);return;}
    this.isPopupOpen = true;
    this.selectedPost = this.newPostService.listaPost.find(post => post.id === idPost);
  }
  closePopup() {
    this.isPopupOpen = false;
  }
}
