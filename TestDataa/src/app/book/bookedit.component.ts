import { Component,ViewChild,OnInit } from '@angular/core';
import { Book } from './book';
import { Books } from './mock-book';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'app-bookedit',
    templateUrl: './bookedit.component.html'
})
export class BookEditComponent {
    book : Book = new Book();
    mybook = Books;
    @ViewChild('bookForm') form : any;
    idofRecord = 0;
    private sub : Subscription;
    ShowRecords;
    globalid;

    constructor(private route : ActivatedRoute,private router : Router){}
    ngOnInit(){
        this.sub = this.route.params.subscribe(
            paramns => {
                let id  = +paramns['id'];
                this.EditBookDetail(id);
            }
        )
    }
    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };
    EditBookDetail(id : number){
        if(id > 0){
            this.idofRecord = id;
            this.ShowRecords = this.mybook[this.mybook.findIndex(a=>a.id == id)];
            this.book.id = this.ShowRecords.id;
            this.book.name = this.ShowRecords.name;
            this.book.pages = this.ShowRecords.pages;
            this.book.author = this.ShowRecords.author;
            let asx = new Date(this.ShowRecords.publishdate);
            let ndate:any = { date:{year:asx.getFullYear(),month: asx.getMonth()+1,day:asx.getDate()} };
            this.book.publishdate = ndate;
        }else{
            this.idofRecord = 0;
        }
    }
    SaveBookDetail(){
        if(this.idofRecord > 0){
                var ac = this.mybook[this.mybook.findIndex(a=>a.id == this.idofRecord)];
                ac.name = this.form.value.name;
                ac.author = this.form.value.author;
                ac.pages = this.form.value.pages;
                let myDate = this.form.value.publishdate.date;
                let convertedDate = new Date(
                    myDate.year,
                    myDate.month-1,
                    myDate.day +1
                );
              ac.publishdate = convertedDate;
                this.mybook = this.mybook.splice(this.mybook.findIndex(x=>x.id == this.idofRecord),1,ac);
                this.ShowRecords = [];
                this.form.reset();
                this.router.navigate(['BookList']);
        }else{
            this.findlastIndex();
            let myDateObj = this.form.value.publishdate.date;
            let convertedDate = new Date(
                myDateObj.year,
                myDateObj.month-1,
                myDateObj.day +1
            );
            let getid = this.globalid + 1;
             this.mybook.push({id: parseInt(getid),name:this.form.value.name,author:this.form.value.author,pages: parseInt(this.form.value.pages),publishdate:convertedDate});
             this.globalid = [];
             this.form.reset();
             this.router.navigate(['BookList']);
        }
    }
    findlastIndex(){
        var res = Math.max.apply(Math,this.mybook.map(function(o){return o.id}));
        this.globalid = res;
    }
}
