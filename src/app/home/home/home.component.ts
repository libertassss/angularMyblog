import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StorageService } from '../../service/storage.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public http:HttpClient,public storage:StorageService,private activatedRoute:ActivatedRoute) {
   
  }
  public userData:Array<any>=[];
  public editCache:object={};
  public allChecked:boolean = false;
  public indeterminate:boolean = false;
  public isSelected:string='home';
  public tags:Array<any>=[];
  public tagChecked:string='用户列表';

  startEdit(key: number): void {
   this.editCache[key].edit=true;
  }
  

  refreshStatus(): void {
    const allChecked = this.userData.every(value => value.checked === true);
    const allUnChecked = this.userData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.userData.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  cancelEdit(key: number): void {
    this.editCache[ key  ].edit =false;
  }

  saveEdit(key: number): void{
    this.editCache[key].edit=false;
  }

  
  
  ngOnInit() {
    this.http.post('/api/selectAllUser',{}).subscribe((res:any)=>{
      console.log(res);
      if(res.code==0){
        // let len=res.data.length;
        // for(let i=0;i<len;i++){
        //   this.userData.push(res.data[i]);
        // }
        this.userData=res.data;
       
        res.data.forEach(item=>{
          if(!this.editCache[(item.userId)]){
            this.editCache[(item.userId)]={
              edit:false,
              data:{...item}
            }
          }
        })
        console.log(this.editCache);
      }
    },err=>{console.log(err)});

  }

}
