import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../service/home.service';
import {Post} from '../../interface/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Post[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getPosts()
      .subscribe(data => this.posts = data.data);
  }

}
