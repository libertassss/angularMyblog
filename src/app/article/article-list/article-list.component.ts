import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
 
  constructor(public http:HttpClient) { }
  public isSelected:object={path:'articleList',key:2};
  public tagChecked:string='文章列表';
  ngOnInit() {
    this.http.post('/api/selectAllArticle','').subscribe((res:any)=>{
        console.log(res);
    },(err:any)=>{

    })
  }

}
