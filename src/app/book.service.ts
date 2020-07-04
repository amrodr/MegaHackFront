import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = environment.apiUrl;
  private data = [
    {
      category: 'Ação',
      books: [
        { id: 1, name: 'Sla1', rating: 4 },
        { id: 2, name: 'Sla1', rating: 4 },
        { id: 3, name: 'Sla1', rating: 4 },
        { id: 4, name: 'Sla1', rating: 4 },
        { id: 5, name: 'Sla2', rating: 2 }
      ]
    },
    {
      category: 'Terror',
      books: [
        { id: 1, name: 'Sla1', rating: 4 },
        { id: 2, name: 'Sla2', rating: 4 },
        { id: 3, name: 'Sla3', rating: 4 },
        { id: 4, name: 'Sla4', rating: 4 },
        { id: 5, name: 'Sla5', rating: 2 }
      ]
    }
  ]

  private myBooks = [

    { id: 1, name: 'Harry Potter', author: 'JK. Rowlling', rating: 5, percentage: .1 },
    { id: 2, name: 'Harry Potter', author: 'JK. Rowlling', rating: 4, percentage: .14 },
    { id: 3, name: 'Harry Potter', author: 'JK. Rowlling', rating: 4, percentage: .5 },
    { id: 4, name: 'Harry Potter', author: 'JK. Rowlling', rating: 2, percentage: .8 },
    { id: 5, name: 'Harry Potter', author: 'JK. Rowlling', rating: 2, percentage: 1 }
  ]

  constructor(
    private http: HttpClient
  ) { }

  getBooks(bookName?:string) {
    if(bookName)
      return this.http.get(`${this.baseURL}/books/${bookName}`);
    else
    return this.http.get(`${this.baseURL}/books`);
  }

  getMyBooks() {
    return this.myBooks;
  }


}
