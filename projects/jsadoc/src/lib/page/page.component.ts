import { Component, Input, OnInit } from '@angular/core';
import { jsadocGroup, jsadocGroupDetail } from '../interfaces';

@Component({
  selector: 'jsadoc-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() pagegroup: jsadocGroup;
  @Input() id: string;

  group_detail: jsadocGroupDetail;

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.group_detail = this.pagegroup.group_detail;
  }

}
