import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,private message:NzMessageService) { }
  public content:any;
  public categoryList:any;
  public price:any;
  public reprice:any;
  public isVisible:boolean=false;
  public categoryPid:number;
  public categoryName:string;
  public categoryDescription:string;
  public categoryIcon:string;
  

  public getCategoryList():void{
    this.http.post("/api/selectAllCategory",'').subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.categoryList=res.data;
      }
    },(err:any)=>{})
  }

  public append(id:number):void{
    this.isVisible=true;
    this.categoryPid=id;
  }

  public handleOk():void{
    var data={
      categoryPid:this.categoryPid,
      categoryName:this.categoryName,
      categoryDescription:this.categoryDescription,
      categoryIcon:this.categoryIcon
    }
    this.http.post('/api/insertCategory',data).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.message.create('success','新增类别成功');
        this.getCategoryList();
        this.isVisible=false;
      }
    },(err:any)=>{})
  }
  public handleCancel():void{
    this.isVisible=false;
  }

  /**
   * 单条删除
   * @param id 
   */
  public delete(id:number):void{
    var data={
      categoryId:id
    };
    this.http.post("/api/deleteCategory",data).subscribe((res:any)=>{
      if(res.code==0){
        this.message.create('success','删除成功');
        this.getCategoryList();
      }
    },(err:any)=>{})
  }

  public deleteAll(id:number):void{
    console.log(id);
    var data={
      categoryId:id
    };
    this.http.post("/api/selectChildren",data).subscribe((res:any)=>{
      console.log(res);
    },(err:any)=>{})

  }
  
  ngOnInit() {
    this.getCategoryList();
    this.activatedRoute.queryParams.subscribe(queryParams=>{
      this.content=queryParams.content;
    })
  }

}
