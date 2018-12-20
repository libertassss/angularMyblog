import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-tags',
  templateUrl: './article-tags.component.html',
  styleUrls: ['./article-tags.component.scss']
})
export class ArticleTagsComponent implements OnInit {

  constructor() { }
  public isSelected:object={path:'articleTags',key:2};
  public tagChecked:string='文章标签';
  ngOnInit() {
  }

}
