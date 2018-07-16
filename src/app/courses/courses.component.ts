import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>{{title}}</h2>
    
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive"> Save</button>
    <span class="fa fa-star"></span>
    <ul>
    <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    <img src="{{imgUrl}}"/>
    <img [src]="imgUrl" />
    `
})
export class CoursesComponent {
  title = 'List of Courses';
  imgUrl = 'http://lorempixel.com/400/200';
  isActive = true;
  email: 'me@example.com';
  onKeyUp() {
    console.log(this.email);
  }
  onSave($event) {
    console.log($event);
  }
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
