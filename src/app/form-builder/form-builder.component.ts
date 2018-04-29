import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent{

  form;
  // =new FormGroup({
  //   name:new FormControl('',Validators.required),
  //   contact:new FormGroup({
  //     phone:new FormControl(),
  //     email: new FormControl()
  //   }),
  //   topics:new FormArray([])
  // })
  constructor(fb: FormBuilder){
    this.form=fb.group({
      name:['',Validators.required],
      contact:fb.group({
        phone:[],
        email:[]
      }),
      topics:fb.array([])
    })
  }
}
