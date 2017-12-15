import { Component, OnInit } from '@angular/core';
import { Books } from './mock-book';
import { Book } from './book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book = Books;
  constructor() { }
  
  ngOnInit() {
    this.book.sort(function(a, b){
      if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
      if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
      return 0;
  });
  }

}
