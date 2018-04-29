import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{

  form=new FormGroup({
    topics: new FormArray([])
  })
  get topics(){
    return this.form.get('topics') as FormArray;
  }
  addTopic(topic: HTMLInputElement){
    console.log(topic);
    this.topics.push(new FormControl(topic.value))
    topic.value='';
  }
  remove(topic: FormControl){
    let index=this.topics.controls.indexOf(topic);
    this.topics.controls.splice(index,1);
  }

}
