import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  
  constructor(private router:ActivatedRoute,private myService:MyServiceService) { }
  public menuId:number;
 
  

  ngOnInit() {
    
  }

}
