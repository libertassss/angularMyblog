import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }
  public content:any;
  public categoryList:any;

  public getCategoryList():void{
    this.http.post("/api/selectAllCategory",'').subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.categoryList=res.data;
      }
    },(err:any)=>{})
  }
  
  ngOnInit() {
    this.getCategoryList();
    this.activatedRoute.queryParams.subscribe(queryParams=>{
      this.content=queryParams.content;
    })
  }

}
