import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-nav',
  templateUrl: './blog-nav.component.html',
  styleUrls: ['./blog-nav.component.scss']
})
export class BlogNavComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public menuName:string;
  public menuLever:number;
  public menuIcon:string;
  public isVisible:boolean=false;
  public handleCancel():void{
    this.isVisible=false;
  }
  public handleOk():void{
    var data={
      menuName:this.menuName,
      menuLever:this.menuLever,
      menuIcon:this.menuIcon
    };
    this.http.post("/api/insertMenuItem",data).subscribe((res:any)=>{
      
    },(err:any)=>{})
    
    
  }
  ngOnInit() {
  }

}
