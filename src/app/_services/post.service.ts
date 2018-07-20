import { AppError } from './../_common/app-error';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs-compat/add/operator/catch';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  updatePost(post) {
    return this.http.patch(
      this.url + '/' + post.id,
      JSON.stringify({ isRead: true })
    );
  }
  deletePost(postId) {
    return this.http.delete(`${this.url}/${postId}`)
    .catch((error: Response) => {
      return Observable.throw(new AppError(error))
    })
}


