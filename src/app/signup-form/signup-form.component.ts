import { usernameValidators } from './username.validators';
import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form=new FormGroup({
    account:new FormGroup({
      username:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        usernameValidators.cannotContainSpace
        
      ],[usernameValidators.shouldBeUnique]),
      password:new FormControl('',Validators.required)
    }),
    
  })
 user(){
  console.log(this.form.get('account.username'))
}
get username(){
  return this.form.get('account.username')
}
login(){
  this.form.setErrors({
    invalidLogin: true
  })
  console.log(this.form.value)
}
}
