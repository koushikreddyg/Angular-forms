import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { TravelPipe } from './travel.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    PasswordFormComponent,
    TravelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
