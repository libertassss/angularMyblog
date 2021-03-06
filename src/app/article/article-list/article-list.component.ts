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


  public articleData:Array<any>=[];
  public editCache:object={};
  public allChecked:boolean = false;
  public indeterminate:boolean = false;
  public pagenow:number=1;
 
  refreshStatus(): void {
    
    const allChecked = this.articleData.every(value => value.checked === true);
    const allUnChecked = this.articleData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.articleData.forEach(data => data.checked = value);
    this.refreshStatus();
  }
  startEdit(key: number): void {
    this.editCache[key].edit=true;
  }
  cancelEdit(key: number): void {
    this.editCache[ key  ].edit =false;
  }

  saveEdit(key: number): void{
    this.editCache[key].edit=false;
  }
  public detaile(content:any):void{
    this.router.navigate(['/parents/articleCategory'],{
      queryParams:{
        content:content
      }
    });
  }
  public more(item:any):any{

  }

  public edit(item:any):any{

  }
  public delete(id:number):void{
    let data=[];
    data.push(id);
    var datas={
      item:data
    };
    this.http.post("/api/deleteArticleMall",datas).subscribe((res:any)=>{
      console.log(res);
    },(err:any)=>{})
  }
  public editArticle():void{
    console.log(1);
    this.router.navigateByUrl('/parents/newArticle');
  }
  ngOnInit() {
    var data={
      psize:6
    };
    this.http.post('/api/selectAllArticle?pageNow='+this.pagenow,data).subscribe((res:any)=>{
        console.log(res);
        if(res.code==0){
         
          this.articleData=res.data.articleList;
          res.data.articleList.forEach(item=>{
            if(!this.editCache[(item.articleId)]){
              this.editCache[(item.articleId)]={
                edit:false,
                data:{...item}
              }
            }
          })
          
        }
    },(err:any)=>{

    })
  }

}
