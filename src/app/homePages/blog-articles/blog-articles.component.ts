import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyServiceService } from '../../service/my-service.service';


@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.scss'],
 
})
export class BlogArticlesComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient,private Myservice:MyServiceService) {}

  public article:any;
  public articleId:number;
  public articleList:any;
  public topArticle:any;
  public nextArticle:any;
  public articleContent:any;
  public tags:any;

  public links:Array<any>=[
    {linkName:'百度',linkUrl:'https://www.baidu.com'},
    {linkName:'开源中国',linkUrl:'https://www.oschina.net/'}
  ]
  public getArticleContent(id:number):void{
    // alert("我执行了");
    var data={
      articleId:id
    }
    this.http.post("/api/selectAllArticleById",data).subscribe((res:any)=>{
      // console.log(res);
      if(res.code==0){
        this.article=res.data.data;
        this.articleContent=res.data.data.articleContent;
        this.tags=res.data.data.tag;
        this.topArticle=res.data.topArticle;
        this.nextArticle=res.data.nextArticle;
        console.log(this.article.articleTitle);
      }
    },(err:any)=>{})
  }

  public getArticleList():void{
  
    this.http.post("/api/selectAlls",'').subscribe((res:any)=>{
      // console.log(res.data);
      if(res.code==0){
        this.articleList=res.data;
        
      }
    },(err:any)=>{})
  }

  public getTopArticle(id):void{
    var data={
      articleId:id
    };
    this.http.post("/api/selectTop",data).subscribe((res:any)=>{
     
      if(res.code==0){
        this.topArticle=res.data;
      }
    },(err:any)=>{})
  }
  public getNextArticle(id):void{
    var data={
      articleId:id
    };
    this.http.post("/api/selectNext",data).subscribe((res:any)=>{
    
      if(res.code==0){
        this.nextArticle=res.data;
      }
    },(err:any)=>{})
  }

  // public goArticle(id:number):void{
  //   this.getArticleContent(id);
  //   this.articleId=id;
  //   this.getTopArticle(id);
  //   this.getNextArticle(id);
  // }
  ngOnInit() {
    this.router.params.subscribe((params:Params)=>{
     
      this.articleId=parseInt(params.id);
      this.getArticleContent(this.articleId);
      this.getArticleList()
       
    })
   
    
  }
  

}
