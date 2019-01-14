import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  private menuId:number;

  public getMenuId():number{
    return this.menuId;
  }
  public setMenuId(menuId:number):void{
    
  }
}
