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

  constructor() { }

  getBooks() {
    return this.data;
  }


}
