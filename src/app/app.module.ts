import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import {PrismComponent} from 'angular-prism'
import 'prismjs/prism';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OperationComponent } from './operation/operation.component';
import { IocomponentComponent } from './iocomponent/iocomponent.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OperationComponent,
    IocomponentComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightJsModule,
    HttpModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
