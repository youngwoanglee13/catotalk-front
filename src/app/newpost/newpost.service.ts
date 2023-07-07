import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  PostDTO } from 'src/app/dto/post.dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {
  url = localStorage.getItem('urlback');
  listaPost: PostDTO[] = [];
  constructor(private http:HttpClient) { }
  
  newPost(id:any): Observable<PostDTO[]>{
    const headers = new HttpHeaders({ 'ngrok-skip-browser-warning': 'true' });
    return this.http.post<PostDTO[]>(this.url + '/post', id, { headers }).pipe(
      tap(response => {
        this.listaPost = this.listaPost.concat(response);
      console.log(this.listaPost);})
    );
  }
  getAllPost(): Observable<PostDTO[]>{
    const headers = new HttpHeaders({'ngrok-skip-browser-warning': 'true'});
    return this.http.get<PostDTO[]>(this.url+'/post/all',{headers}).pipe(
      tap(response => {
        this.listaPost = response;
      })
    );
  }
  getPostById(id:any): Observable<PostDTO[]>{
    const headers = new HttpHeaders({'ngrok-skip-browser-warning': 'true'});
    return this.http.get<PostDTO[]>(this.url+'/post/'+id,{headers});
  }
  postImagen(file:any): Observable<any>{
    const headers = new HttpHeaders({'ngrok-skip-browser-warning': 'true'});
    return this.http.post<any>(this.url+'/post/image',file,{headers});
  }
}
