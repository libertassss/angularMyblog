import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private myService:MyServiceService) { }

  ngOnInit() {
    this.myService.setMenuIds("关于");
  }

}
