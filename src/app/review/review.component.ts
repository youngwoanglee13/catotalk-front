import { Component, Input } from '@angular/core';
import { ReviewService } from './review.service';
import { ReviewDTO } from '../dto/review.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() selectedPost: any;
  constructor(
    private reviewService: ReviewService,
    public authService: AuthService,) { 
  } 
  newComment='';
  listaReviews: ReviewDTO[] = [];
  comment(event: Event){
    if(this.newComment){
      event.preventDefault();
      let payload = {
        review: {
          comment: this.newComment 
        },
      idPost: this.selectedPost.id
    }
    this.reviewService.newReview(payload).subscribe((res)=>{this.selectedPost.reviews.push(res); })
    }
    this.newComment='';
  }  
}
