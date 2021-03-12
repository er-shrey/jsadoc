import { Component, Input, OnInit } from '@angular/core';
import { jsadocApi, jsadocParameter, jsadocResponse } from '../interfaces';

@Component({
  selector: 'jsadoc-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.scss']
})
export class ApiDocComponent implements OnInit {

  @Input() api: jsadocApi;
  @Input() id: string;

  parameters: jsadocParameter[];
  response: jsadocResponse;

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.parameters = this.api.parameters;
    this.response = this.api.response;
  }

  getMethodColor() {
    switch (this.api.method) {
      case 'GET': return 'primary'; break;
      case 'POST': return 'success'; break;
      case 'PUT': return 'warning'; break;
      case 'PATCH': return 'info'; break;
      case 'DELETE': return 'danger'; break;
      default: return 'secondary';
    }
  }

  getBottomBorder() {
    if (!this.collapsed) {
      return 'border-bottom';
    }
    else return ''
  }

}
