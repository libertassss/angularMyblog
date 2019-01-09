import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.scss']
})
export class BlogArticlesComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }
  public articleContent:any;
  public articleId:number;
  public getArticleContent(id:number):void{
    var data={
      articleId:id
    }
    this.http.post("/api/selectArticleById",data).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.articleContent=res.data;
      }
    },(err:any)=>{})
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.articleId=queryParams.id;
      
    });
    this.getArticleContent(this.articleId);
    
  }

}
