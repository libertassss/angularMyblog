import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {  }
  private tagChecked:string;

  public setUserId(userId:number) : void{
    localStorage.setItem("userId",userId.toString());
  }
  public getUserId():string{
    return localStorage.getItem("userId");
  }

  public setPaths(data:any):void{
    this.tagChecked=data;
    console.log(data);
    if(localStorage.getItem("paths")==null){
      let arr=new Array();
      localStorage.setItem("paths",JSON.stringify(arr));
      let paths=localStorage.getItem("paths");
      if(arr.indexOf(data)==-1){
        // 当前标签不存在paths中时
        arr.push(data);
        console.log(arr);
        localStorage.setItem('paths',JSON.stringify(arr));
      }else{
        // 当前存在，置顶
        this.swapArray(JSON.parse(paths),JSON.parse(paths).indexOf(data));
      }
    }else{
      let paths=JSON.parse(localStorage.getItem("paths"));

      console.log('运行到else');
      if(paths.indexOf(data)==-1){
        // 当前标签不存在paths中时
        paths.push(data);
        localStorage.setItem('paths',JSON.stringify(paths));
      }else{
        // 当前存在，置顶
        console.log('运行到置顶');
        this.swapArray(paths,paths.indexOf(data));
      }
    } 
  }

  public getTagChecked():string{
    console.log(this.tagChecked);
    return this.tagChecked;
  }

  public getPaths():any{
    if(localStorage.getItem("paths")!=null&&localStorage.getItem("paths")!='[]'){
      return JSON.parse(localStorage.getItem("paths"));
    }
  }

  public removePath(tag:string) :any{
    if(localStorage.getItem("paths")!=null&&localStorage.getItem("paths")!='[]'){
      let paths=JSON.parse(localStorage.getItem("paths"));
      paths.splice(paths.indexOf(tag),1);
      localStorage.setItem("paths",JSON.stringify(paths));
    }
  }

  // 置顶
  public swapArray(arr:Array<any>,index2:number) :void{
    arr[arr.length-1]=arr.splice(index2,1)[0]; 
    localStorage.setItem("paths",JSON.stringify(arr));
  }
}
