import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private http: HttpClient,private storage:StorageService) {

  }
  public articleContent: any;
  public singleValue: any;
  public categoryList: Array<any> = [];
  public categoryIds: any[] = null;
  public tags:any[]=null;
  public selectTagIds:any;
  public imageUrl:string;
  public articleTitle:string;
  public articleContentMd:any;
  public tinyMceSettings:any = {
    
  };

  public handleEvent(e: any): void {
    console.log(this.articleContent);
    console.log(e.event.target.body.innerText);
    this.articleContentMd=e.event.target.body.innerText;
  }
  public onChanges(values: any): void {
    
  }
  public save():void{
    var len=this.categoryIds.length;
    var data={
      articleUserId:this.storage.getUserId(),
      articleTitle:this.articleTitle,
      articleContent:this.articleContent,
      articleContentMd:this.articleContentMd,
      articleParentCategoryId:this.categoryIds[0],
      articleChildCategoryId:this.categoryIds[len-1],
      articleTagIds:this.selectTagIds.join(",")
    };
    this.http.post('/api/insertSelectev',data).subscribe((res:any)=>{
      console.log(res);
    },(err:any)=>{})
  }
  // 级联选择器
  public fun(e) {
    console.log(e)
    if(e.option.children.length<=0){
      e.option.isLeaf=true;
    }else{
      
    }
  }

  public getCategory():void{
    this.http.post('/api/selectAllCategory','').subscribe((res:any)=>{
      if (res.code == 0) {
        this.categoryList=res.data;
        this.categoryIds=[this.categoryList[0].id];
        console.log(res);
        console.log(this.categoryList);
      }
    },(err:any)=>{})
  }

  public getTags():void{
    this.http.post('/api/selectAllTags','').subscribe((res:any)=>{
      if(res.code==0){
        console.log(res);
        this.tags=res.data;
      }
    },(err:any)=>{

    })
  }

 
// 图片上传
  public uploadImag(data,success,failure){
    this.http.post('/api/uploadImg',data).subscribe((res:any)=>{
      if(res.code==0){
        success("/api"+res.url);
      }else{
        failure(res.url);
      }
    },(err:any)=>{})
  }


  ngOnInit() {
    this.getCategory();
    this.getTags();
    let that=this;
    // tinymce初始化设置
    this.tinyMceSettings={
      skin_url: '/assets/skins/lightgray',
      inline: false,
      width:'90%',
      statusbar: false,
      browser_spellcheck: true,
      height: 800,
      plugins: 'image preview link',
      images_upload_handler:function(blobInfo, success, failure){
        console.log(blobInfo);
        var data;
        data = new FormData();
        data.append('file', blobInfo.blob(), blobInfo.filename());
        console.log(data);
        that.uploadImag(data,success,failure);
      },
      images_reuse_filename: true
    }
   
  }
}
