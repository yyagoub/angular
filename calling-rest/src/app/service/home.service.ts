import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostsRequest} from '../interface/posts.request';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'https://gorest.co.in/public-api/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsRequest>{
    return this.http.get<PostsRequest>(this.url);
  }
}
