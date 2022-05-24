import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './books/book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getBooks(url:string):Observable<Book[]>{
    return this.http.get<Book[]>(url);
  } 

}
