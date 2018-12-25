import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private http: HttpClient) {

  }
  public dataModel: any;
  public singleValue: any;
  public categoryList: Array<any> = [];
  public values: any[] = null;
  public tags:any[]=null;
  public selectTag:any;
  public imageUrl:string;
  public tinyMceSettings = {
    skin_url: '/assets/skins/lightgray',
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 450,
    plugins: 'image',
    file_picker_callback:function(callback, value, meta) {
      console.log(meta);
      if(meta.filetype=='image'){
        document.getElementById('file_input').click();
      }  
    },
    images_upload_handler:function(blobInfo, success, failure){
      console.log(blobInfo);
      var data;
      data = new FormData();
      data.append('file', blobInfo.blob(), blobInfo.filename());
      console.log(data);
     var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', '/api/uploadImg');

    xhr.onload = function() {
      var json;

      if (xhr.status != 200) {
        failure('HTTP Error: ' + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != 'string') {
        failure('Invalid JSON: ' + xhr.responseText);
        return;
      }

      success(json.location);
    };
    xhr.send(data);
      // this.http.post('/api/uploadImg',data).subscribe((res:any)=>{
      //   console.log(res);
      //   if(res.code==0){
      //     this.imageUrl=res.url;
      //   }
      // },(err)=>{})
      
    }
  };

  public handleEvent(e: any): void {
    console.log(this.dataModel);
  }
  public onChanges(values: any): void {
    
  }
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
        this.values=[this.categoryList[0].id];
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

  public readFile(e:any):void{
    console.log(e);
    if(e.target.files[0]){
      const file=e.target.files[0];
      var data = new FormData();
      data.append('file',file);
      this.http.post('/api/uploadImg',data).subscribe((res:any)=>{
        console.log(res);
        if(res.code==0){
          this.imageUrl=res.url;
        }
      },(err)=>{})
    }
    var reader=new FileReader();
    
  }

  public uploadImag(data){
    this.http.post('/api/uploadImg',data).subscribe((res:any)=>{

    },(err:any)=>{})
  }

  public funs(e){
    console.log(e);
    return false;
  }
  ngOnInit() {
    this.getCategory();
    this.getTags();
   
  }


}
