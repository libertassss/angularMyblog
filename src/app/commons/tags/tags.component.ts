import { Component, OnInit,Input } from '@angular/core';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  constructor(public storage:StorageService) {
   
  }
  public tags:any;
  public tagChecked:any;
  
  ngOnInit() {
   alert('tag')
    this.tags=this.storage.getPaths();
    this.tagChecked=this.storage.getTagChecked();
    console.log(this.tags);
  }
  public onClose(e: MouseEvent,tag:string): void {
    console.log('tag was closed.');
    this.storage.removePath(tag);
  }
  public afterClose(): void {
    console.log('after tag closed');
  }

}
