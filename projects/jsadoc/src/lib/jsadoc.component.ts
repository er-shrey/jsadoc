import { Component, Input, OnInit } from '@angular/core';
import { jsadocJson } from './interfaces';

@Component({
  selector: 'jsadoc-jsadoc',
  templateUrl: './jsadoc.component.html',
  styleUrls: ['./jsadoc.component.scss']
})
export class JsadocComponent implements OnInit {

  @Input() json: jsadocJson;

  constructor() { }

  ngOnInit(): void {
  }

}
