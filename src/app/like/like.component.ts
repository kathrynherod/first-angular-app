import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('count') count: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    this.count += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
    console.log(this.count);
  }
}
