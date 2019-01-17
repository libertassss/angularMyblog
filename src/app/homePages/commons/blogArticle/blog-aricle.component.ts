import { Component, OnInit, Pipe } from '@angular/core';
import { MyServiceService } from '../../../service/my-service.service';


@Component({
  selector: 'app-blog-aricle',
  templateUrl: './blog-aricle.component.html',
  styleUrls: ['./blog-aricle.component.scss']
})
export class BlogAricleComponent implements OnInit {

  constructor(private myService:MyServiceService) { }

  private menuIds:Array<string>=[];
  ngOnInit() {
    
  }
  ngDoCheck(){
    this.menuIds=this.myService.getMenuIds();
  }

  

}
