import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private myService:MyServiceService,private activatedRoute: ActivatedRoute) { }
  public pageNow:number=1;
  public articleNew:any;
  public total:number;
  public getArticleNew(e:number):void{
    var data={
      psize:6,
    }
    this.http.post("/api/selectAllArticle?pageNow="+e,data).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.articleNew=res.data.articleList;
        this.total=res.data.total;
      }
    },(err:any)=>{})
  }
  public loadData(e:any):void{
    console.log(e);
  }

  public goArticle(id:number):void{
    this.router.navigate(['indexPage/blogArticles'],{
      queryParams:{
        id:id
      }
    })
  }

  public getSearchList(keyWorld:string):void{
    var data={
      articleTitle:keyWorld
    };
    this.http.post("/api/selectLike",data).subscribe((res:any)=>{
      if(res.code==0){
        this.articleNew=res.data;
      }
      
    },(err:any)=>{})
  }

  ngOnInit() {
    this.getArticleNew(1);
    this.myService.setMenuId(4);
    this.myService.setMenuIds("文章");
  }

 

}
