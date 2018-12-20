import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import {StorageService} from '../../service/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName:string;
  public userPass:string;

  //依赖注入
  constructor(private http:HttpClient,public router:Router,private message:NzMessageService,public storage:StorageService) {}

  public loadData():void{
    let that=this;
    var data={
      userName:that.userName,
      userPass:that.userPass
    }
    this.http.post('/api/Dologin',data).subscribe((res:any)=>{
      console.log(typeof(res));
      if(res.code==0){
        this.storage.setUserId(res.data.userId);
        this.message.info('登录成功');
        this.router.navigateByUrl('home');
      }else{

      }
      
    },err=>{
      console.log('ERROR',err);
    })
  }

  ngOnInit() {
    // 页面刷新
  }

}
