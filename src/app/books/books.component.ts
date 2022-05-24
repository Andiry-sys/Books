import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';
import { Book } from './book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
   Books:Book[] = [];
  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.httpservice.getBooks('https://localhost:7068/api/Books').subscribe(data=>{this.Books=data;});
  }

}
