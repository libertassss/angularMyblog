import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  public menuId:number;
  @ViewChild("childComponent") childComponent:any;


  ngOnInit() {
    console.log(this.childComponent);
    switch(this.childComponent.nativeElement.nextSibling.localName){
      case "app-blog-articles":
        this.menuId=2;
      case "app-blog-index":
        this.menuId=1;
    }
    console.log(this.menuId);
  }

}
