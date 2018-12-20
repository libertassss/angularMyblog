import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
 
  constructor(public http:HttpClient,public router:Router) { }
  public isSelected:object={path:'articleList',key:2};
  public tagChecked:string='文章列表';
  public data:Array<any>=[];
 
  

  public more(item:any):any{

  }

  public edit(item:any):any{

  }

  public editArticle():void{
    console.log(1);

    this.router.navigateByUrl('/articleList/newArticle');
  }
  ngOnInit() {
    this.http.post('/api/selectAllArticle','').subscribe((res:any)=>{
        console.log(res);
        if(res.code==0){
         
          this.data=res.data;
          
        }
    },(err:any)=>{

    })
  }

}
