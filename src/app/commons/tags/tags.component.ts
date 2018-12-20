import { Component, OnInit,Input } from '@angular/core';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  constructor(public storage:StorageService) { }
  public tags:any;
  @Input() tagChecked:any;
  
  ngOnInit() {
    this.tags=this.storage.getPaths();
  }
  public onClose(e: MouseEvent,tag:string): void {
    console.log('tag was closed.');
    this.storage.removePath(tag);
  }
  public afterClose(): void {
    console.log('after tag closed');
  }

}
