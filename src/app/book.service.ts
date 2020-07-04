import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  private data = [
    {
      category: 'Ação',
      books: [
        { id: 1, name: 'Sla1', rating: 4, author: 'JK. Rowlling' },
        { id: 2, name: 'Sla1', rating: 4, author: 'JK. Rowlling' },
        { id: 3, name: 'Sla1', rating: 4, author: 'JK. Rowlling' },
        { id: 4, name: 'Sla1', rating: 4, author: 'JK. Rowlling' },
        { id: 5, name: 'Sla2', rating: 2, author: 'JK. Rowlling' }
      ]
    },
    {
      category: 'Terror',
      books: [
        { id: 1, name: 'Sla1', rating: 4, author: 'JK. Rowlling' },
        { id: 2, name: 'Sla2', rating: 4, author: 'JK. Rowlling' },
        { id: 3, name: 'Sla3', rating: 4, author: 'JK. Rowlling' },
        { id: 4, name: 'Sla4', rating: 4, author: 'JK. Rowlling' },
        { id: 5, name: 'Sla5', rating: 2, author: 'JK. Rowlling' }
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

  constructor() { }

  getBooks() {
    return this.data;
  }

  getMyBooks() {
    return this.myBooks;
  }


}
