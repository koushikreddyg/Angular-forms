import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent{
  password:string='1234';
  newPass:string;
  matchPass: string;
  form;
  constructor(fb:FormBuilder){
    this.form=fb.group({
      oldPassword:['',Validators.required,PasswordValidator.oldPasswordValidation],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    },{
      validator:PasswordValidator.passwordMatch
    })
  }
  getError(){
    console.log(this.form.errors.passwordShouldMatch);
    
  }
  login(){
    this.form.setErrors({
      invalidLogin: true
    })
  }
  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword')
  }
  
}
