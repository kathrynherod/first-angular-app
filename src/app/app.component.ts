import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Angular app';
  tweet = {
    likesCount: 10,
    isLiked: true
  };
}
