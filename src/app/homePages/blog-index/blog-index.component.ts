import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
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

  ngOnInit() {
    this.getArticleNew(1);
  }

}
