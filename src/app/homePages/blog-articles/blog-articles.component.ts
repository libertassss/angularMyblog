import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.scss']
})
export class BlogArticlesComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  public articleContent:any;
  public articleId:number;
  public articleList:any;
  public topArticle:any;
  public nextArticle:any;
  public links:Array<any>=[
    {linkName:'百度',linkUrl:'https://www.baidu.com'},
    {linkName:'开源中国',linkUrl:'https://www.oschina.net/'}
  ]
  public getArticleContent(id:number):void{
    var data={
      articleId:id
    }
    this.http.post("/api/selectAllArticleById",data).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.articleContent=res.data;
      }
    },(err:any)=>{})
  }

  public getArticleList():void{
    this.http.post("/api/selectAlls",'').subscribe((res:any)=>{
      if(res.code==0){
        this.articleList=res.data;
      }
    },(err:any)=>{})
  }

  public getTopArticle():void{
    var data={
      articleId:this.articleId
    };
    this.http.post("/api/selectTop",data).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.topArticle=res.data;
      }
    },(err:any)=>{})
  }
  public getNextArticle():void{
    var data={
      articleId:this.articleId
    };
    this.http.post("/api/selectNext",data).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.nextArticle=res.data;
      }
    },(err:any)=>{})
  }

  public goArticle(id:number):void{
    this.getArticleContent(id);
    this.articleId=id;
    this.getTopArticle();
    this.getNextArticle();
  }
  ngOnInit() {
    this.router.params.subscribe((params:Params)=>{
      this.articleId=params['articleId'];
      console.log(params);
    })
    this.getArticleContent(this.articleId);
    this.getArticleList();
    this.getTopArticle();
    this.getNextArticle();
    
  }

}
