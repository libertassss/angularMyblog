import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-nav',
  templateUrl: './blog-nav.component.html',
  styleUrls: ['./blog-nav.component.scss']
})
export class BlogNavComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public menuName:string;
  public menuLever:number;
  public menuIcon:string;
  public isVisible:boolean=false;
  public menuList:any;
  public editCache:object={};
  public allChecked:boolean = false;
  public indeterminate:boolean = false;
  public handleCancel():void{
    this.isVisible=false;
  }
  public handleOk():void{
    var data={
      menuName:this.menuName,
      menuLever:this.menuLever,
      menuIcon:this.menuIcon
    };
    this.http.post("/api/insertMenuItem",data).subscribe((res:any)=>{
      console.log(res);
    },(err:any)=>{}) 
  }

  public getMenuList():void{
    this.http.post("/api/selecteMenu",'').subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        this.menuList=res.data;
        res.data.forEach(item=>{
          if(!this.editCache[(item.menuId)]){
            this.editCache[(item.menuId)]={
              edit:false,
              data:{...item}
            }
          }
        })
      }
    },(err:any)=>{})
  }

  refreshStatus(): void {
    const allChecked = this.menuList.every(value => value.checked === true);
    const allUnChecked = this.menuList.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.menuList.forEach(data => data.checked = value);
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
 
  ngOnInit() {
    this.getMenuList();
  }

}
