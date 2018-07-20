import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostsService extends DataService {
  constructor(http: Http) {
    super('http://abcjsonplaceholder.typicode.com/posts', http);
  }
}
