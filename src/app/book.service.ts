import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {


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

    { id: 1, name: 'Harry Potter', author: 'JK. Rowlling', rating: 5, percentage: 10 },
    { id: 2, name: 'Harry Potter', author: 'JK. Rowlling', rating: 4, percentage: 14 },
    { id: 3, name: 'Harry Potter', author: 'JK. Rowlling', rating: 4, percentage: 55 },
    { id: 4, name: 'Harry Potter', author: 'JK. Rowlling', rating: 2, percentage: 89 },
    { id: 5, name: 'Harry Potter', author: 'JK. Rowlling', rating: 2, percentage: 100 }
  ]

  constructor() { }

  getBooks() {
    return this.data;
  }

  getMyBooks() {
    return this.myBooks;
  }


}
