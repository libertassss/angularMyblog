import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../service/storage.service';
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  @Input() isSelected:any;
  
  goUserList(){
    this.storage.setPaths('用户列表');
    this.router.navigateByUrl('home');
  }
  goRegister(){
    this.storage.setPaths('用户注册');
    this.router.navigateByUrl('register');
  }
  goArticleList(){
    this.storage.setPaths('文章列表');
    this.router.navigateByUrl('articleList');
  }
  goArticleCategory(){
    this.storage.setPaths('文章类别');
    this.router.navigateByUrl('articleCategory');
  }
  goArticleTags(){
    this.storage.setPaths('文章标签');
    this.router.navigateByUrl('articleTags');
  }
  constructor(public router:Router,public storage:StorageService) { }

  ngOnInit() {
    
  }

}
