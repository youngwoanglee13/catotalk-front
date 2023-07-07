import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewDTO } from '../dto/review.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = localStorage.getItem('urlback');
  constructor(private http:HttpClient, private router:Router) { }
  newReview(payload:any): Observable<ReviewDTO[]>{
    return this.http.post<ReviewDTO[]>(this.url+'/review',payload);
  }
  getReviewsByIdPost(id:any): Observable<ReviewDTO[]>{
    const headers = new HttpHeaders({'ngrok-skip-browser-warning': 'true'});
    return this.http.get<ReviewDTO[]>(this.url+'/review/'+id,{headers});
  }
}
