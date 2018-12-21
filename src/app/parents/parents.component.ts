import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {

  constructor(private storage:StorageService,private activatedRoute:ActivatedRoute) { }

  public tagChecked:string;
  ngOnInit() {
    this.storage.setPaths('用户列表');
  }

}
