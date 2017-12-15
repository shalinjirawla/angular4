import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookEditComponent } from './book/bookedit.component';
import {Ng2PaginationModule} from 'ng2-pagination';

import { routing } from './app.routing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    FormsModule,
    HttpModule,
    routing,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
