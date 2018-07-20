import { PostService } from './../_services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response.json();
      },
      (error: Response) => {
        alert('an unexpected error has occurred');
        console.log(error);
      }
    );
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(
      response => {
        //alternate way to write post after adding the id
        //post['id'] = response.json().id
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        error.status === 400
          ? null //this.form.setErrors(error.json())
          : alert('an unexpected error has occurred');
        console.log(error);
      }
    );
  }
  updatePost(post) {
    this.service.updatePost(post).subscribe(
      response => {
        console.log(response);
      },
      error => {
        alert('an unexpected error has occurred');
        console.log(error);
      }
    );
  }
  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        error.status === 404
          ? alert('this post was already deleted')
          : alert('an unexpected error has occurred');
        console.log(error);
      }
    );
  }
}
