import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.scss']
})
export class SearchPagesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public articleNew:any;
  public keyWord:any;

  public getSearchList(){
    var data={
      articleTitle:this.keyWord
    };
    this.http.post("/api/selectLike",data).subscribe((res:any)=>{
      if(res.code==0){
        this.articleNew=res.data;
      }
    },(err:any)=>{})
  }
  public goBack(){
    history.back();
  }
  ngOnInit() {

  }

}
