import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.css']
})
export class UdemyFormComponent {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ];

  constructor() {}

  submit(course) {
    console.log(course);
  }

  ngOnInit() {}
}
