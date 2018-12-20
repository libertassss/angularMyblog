import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  constructor() { }
  public isSelected:object={path:'articleCategory',key:2};
  public tagChecked:string='文章类别';
  ngOnInit() {
  }

}
