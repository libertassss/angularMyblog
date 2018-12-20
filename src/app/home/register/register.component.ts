import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isSelected:object={path:'register',key:1};
  constructor() { }
  public tagChecked:string="用户注册";
  
  ngOnInit() {
    
  }

}
