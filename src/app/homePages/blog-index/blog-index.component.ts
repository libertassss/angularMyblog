import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public articleNew:any;
  public getArticleNew():void{
    this.http.post("/api/selectAllArticle",'').subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.articleNew=res.data;
        
       
      }
    },(err:any)=>{})
  }

  ngOnInit() {
    this.getArticleNew();
  }

}
