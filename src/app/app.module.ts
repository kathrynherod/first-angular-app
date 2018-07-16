import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case/title-case.pipe';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TitleCaseComponent,
    TitleCasePipe,
    LikeComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
