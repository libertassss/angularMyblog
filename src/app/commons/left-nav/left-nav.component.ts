import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  public isOpen:string;
  public isSelected:string;
  
  goUserList(){
    this.storage.setPaths('用户列表');
    this.isOpen='1';
    this.isSelected='home';
    this.router.navigate(['/parents/home']);
  }
  goRegister(){
    this.storage.setPaths('用户注册');
    this.isOpen='1';
    this.isSelected='register';
    this.router.navigate(['/parents/register']);
  }
  goArticleList(){
    this.storage.setPaths('文章列表');
    this.isOpen='2';
    this.isSelected='articleList';
    this.router.navigate(['/parents/articleList']);
  }
  goArticleCategory(){
    this.storage.setPaths('文章类别');
    this.isOpen='2';
    this.isSelected='articleCategory';
    this.router.navigate(['/parents/articleCategory']);
  }
  goArticleTags(){
    this.storage.setPaths('文章标签');
    this.isOpen='2';
    this.isSelected='articleTags';
    this.router.navigate(['/parents/articleTags']);
  }
  constructor(public storage:StorageService,public router:Router) { }

  ngOnInit() {
    console.log(this.router.url);
    console.log(this.router.url.split("parents/")[1]);
    
    let path=this.router.url.split("parents/")[1];
    this.isSelected=this.router.url.split("parents/")[1];
    console.log(this.isSelected);
     if(path=='home'||path=='register'){
       this.isOpen='1';
     }
     if(path=='articleList'||path=='articleCategory'||path=='articleTag'){
       this.isOpen='2';
     }
     
  }

}
