import { Component } from '@angular/core';
import { NewPostService } from './newpost.service';
// import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewPostComponent {
  post = {description: '', date:''};
  constructor(private newPostService: NewPostService,private router:Router) { }
  newPost() {
    this.post.date = "moment().format('H:m D MMM.YYYY ');"
    this.newPostService.newPost(this.post).subscribe((res)=>{console.log(res),this.router.navigate(['/inicio'], { skipLocationChange: true });})
    // this.newPostService.newPost(this.post).subscribe((res)=>{console.log(res)})
    // this.router.navigate(['inicio'])
    // this.router.navigate(['/inicio'], { skipLocationChange: true });
  }

  // redirigir()
  // {
  //   this.router.navigate(['inicio']);
  // }

}
