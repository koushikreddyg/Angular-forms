import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent  {
  
  switchCase:boolean=true;
  fanSwitch:boolean;
  lambSwitch:boolean;
  fanText:string;
  fruitsSwitch: boolean;
  constructor(){
    this.fanSwitch=false;
    this.lambSwitch=false;
    this.fanText="Fan is OFF";
    this.fruitsSwitch=false;
  }
  switchFan(){
      this.fanSwitch=!this.fanSwitch;
  }
  switchLamb(){
    this.lambSwitch=!this.lambSwitch;
  }
  trackCourses(index, course){
    return course.name
  }
  switchArray=[{name:"Fan Switch",on:"Fan Switch is ON", off:"Fan Switch is OFF", fn:this.switchFan()}]
                //{name:"Lamb Switch",on:"Lamb Switch is ON", off:"Lamb Switch is OFF", fn:this.switchLamb()}];
  fruits=['apple', 'banana', 'mango'];
  loadFruits(){
    this.fruitsSwitch=true;
  }
  changeSwitch(){
    this.switchCase=!this.switchCase;
  }
}
