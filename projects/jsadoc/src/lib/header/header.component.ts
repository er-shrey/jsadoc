import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { jsadocHeader } from '../interfaces';

@Component({
  selector: 'jsadoc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() header: jsadocHeader;

  modalHeader: string = "";
  modalBody: string = "";

  licenseText: string = "";
  termsText: string = "";

  private subscriptions: Array<Subscription> = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    var licenseSubs = this.http.get(this.header.lisence, {responseType: 'text'}).subscribe(
      data => {
        this.licenseText = data;
      },
      error => {
        console.log(error);
      }
    );
    this.subscriptions.push(licenseSubs);

    var termsSubs = this.http.get(this.header.termsConditions, {responseType: 'text'}).subscribe(
      data => {
        this.termsText = data;
      },
      error => {
        console.log(error);
      }
    );
    this.subscriptions.push(termsSubs);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  openModal(type) {
    if (type == 'terms') {
      this.modalHeader = "Terms & Conditions";
      this.modalBody = this.termsText;
    } else {
      this.modalHeader = "License";
      this.modalBody = this.licenseText;
    }
  }

}
