import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  private menuId:number;
  private menuIds:Array<string>=[];
  private keyWorld:string;
  private type:number;

  public getMenuId():number{
    return this.menuId;
  }
  public setMenuId(menuId:number):void{
    this.menuId=menuId;
  }
  public getMenuIds():Array<string>{
    return this.menuIds;
  }
  public setMenuIds(menuName:string):void{
    if(this.menuIds.indexOf(menuName)==-1)
      this.menuIds.push(menuName);
    else{
      let index=this.menuIds.indexOf(menuName);
      let length=this.menuIds.length;
      this.menuIds.splice(index+1,length-index-1);
    }
      
  }
  public getKeyWorld():string{
    return this.keyWorld;
  }
  public getType():any{
    return this.type;
  }
  public setSearch(keyWorld:string,type:any):void{
    this.keyWorld=keyWorld;
    this.type=type;
  }
}
