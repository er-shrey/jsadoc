import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'jsadoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app-jsadoc';

  content: object;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private http: HttpClient
  ) {
    var licenseSubs = this.http.get('/assets/files/api_doc.json',{responseType: 'json'}).subscribe(
      data => {
        this.content = data;
      },
      error => {
        console.log(error);
      }
    );
    this.subscriptions.push(licenseSubs);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
