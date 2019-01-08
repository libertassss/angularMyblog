import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public pageNow:number=1;
  public articleNew:any;
  public getArticleNew(pagesize:number):void{
    var data={
      psize:pagesize,
    }
    this.http.post("/api/selectAllArticle?pageNow="+this.pageNow,data).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.articleNew=res.data.articleList;
        
      }
    },(err:any)=>{})
  }
  public loadData(e:any):void{

  }

  public goArticle(id:number):void{

  }

  ngOnInit() {
    this.getArticleNew(6);
  }

}