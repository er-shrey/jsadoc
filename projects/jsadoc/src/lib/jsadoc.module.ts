import { NgModule } from '@angular/core';
import { JsadocComponent } from './jsadoc.component';
import { HeaderComponent } from './header/header.component';
import { ApiDocComponent } from './api-doc/api-doc.component';
import { PageComponent } from './page/page.component';
import { CommonModule } from '@angular/common';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './safe-html.pipe';


@NgModule({
  declarations: [
    JsadocComponent,
    HeaderComponent,
    ApiDocComponent,
    PageComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    NgxJsonViewerModule,
    HttpClientModule
  ],
  exports: [JsadocComponent]
})
export class JsadocModule { }
