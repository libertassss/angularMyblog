import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  public navList:any;
  @Input() menuId:number;
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
      this.router.navigate(["indexPage/blogIndex"]);
    }
  }

  ngOnInit() {
    this.getNavList();
  }

}
