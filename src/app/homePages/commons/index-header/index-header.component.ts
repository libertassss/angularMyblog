import { Component, OnInit, Input, ChangeDetectorRef, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyServiceService } from '../../../service/my-service.service';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent {

  constructor(private http:HttpClient,private router:Router,private myService:MyServiceService,private changeDetectorRef:ChangeDetectorRef  ) { }
  public navList:any;
  public menuId:number;
  public keyWorld:string;
  public getNavList():void{
    this.http.post("/api/selecteMenu",'').subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.navList=res.data;
      }
    },(err:any)=>{})
  }
  public goLogin():void{
    this.router.navigate(['login']);
  }

  public goContent(id:number):void{
    switch(id){
      case 1:
      this.myService.setMenuId(1);
      this.router.navigate(["indexPage/blogIndex"]);
      break;
      case 4:
      this.myService.setMenuId(4);
      this.myService.setMenuIds("文章");
      this.router.navigate(["indexPage/blogList"]);
      break;
      case 5:
      this.router.navigate(["indexPage/aboutMe"]);
      break;
      default:
      break;
    }
  }
  public goSearch():void{
    this.router.navigate(["search"])
  }

  ngOnInit() {
    this.getNavList();
    this.menuId=this.myService.getMenuId();
  }

  ngDoCheck(){
    this.menuId=this.myService.getMenuId();
  }

  

}
