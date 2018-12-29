import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-article-tags',
  templateUrl: './article-tags.component.html',
  styleUrls: ['./article-tags.component.scss']
})
export class ArticleTagsComponent implements OnInit {

  constructor(private http:HttpClient,private message:NzMessageService) { }
  public tagData:Array<any>=[];
  public editCache:object={};
  public allChecked:boolean = false;
  public indeterminate:boolean = false;
  public isVisible:boolean=false;
  public tagName:string;
  public tagDescription:string;

  startEdit(key: number): void {
    this.editCache[key].edit=true;
  }
   

   
 
  refreshStatus(): void {
     const allChecked = this.tagData.every(value => value.checked === true);
     const allUnChecked = this.tagData.every(value => !value.checked);
     this.allChecked = allChecked;
     this.indeterminate = (!allChecked) && (!allUnChecked);
  }
 
  checkAll(value: boolean): void {
     this.tagData.forEach(data => data.checked = value);
     this.refreshStatus();
  }
 
  cancelEdit(key: number): void {
     this.editCache[ key  ].edit =false;
  }
 
  saveEdit(key: number): void{
     this.editCache[key].edit=false;
  }

  /**
   * 获取标签列表
   */
  public getTagList():void{
    this.http.post("/api/selectAllTags",'').subscribe((res:any)=>{
      if(res.code==0){
        this.tagData=res.data;
        res.data.forEach(item=>{
          if(!this.editCache[(item.tagId)]){
            this.editCache[(item.tagId)]={
              edit:false,
              data:{...item}
            }
          }
        })
      }
    },(err:any)=>{})
  }
  /**
   * 删除tag
   * @param id 
   */
  public delete(id:any):void{
    var data={
      tagId:id
    };
    this.http.post('/api/deleteTag',data).subscribe((res:any)=>{
      if(res.code==0){
        this.message.create('success','删除成功');
        this.getTagList();
      }
    },(err:any)=>{})
  }

  public nzOnCancel():void{
    this.isVisible=false;
  }

  /**
   * 新增
   */
  public handleOk():void{
    var data={
      tagName:this.tagName,
      tagDescription:this.tagDescription
    };
    this.http.post("/api/insertTag",data).subscribe((res:any)=>{
      if(res.code==0){
        this.message.create('success','新增成功');
        this.getTagList();
        this.isVisible=false;
      }
    },(err:any)=>{})
  }

  ngOnInit() {
    this.getTagList();
  }

}
