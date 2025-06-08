import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  create(createBookDto: CreateBookDto): Book {
    const book: Book = {
      id: this.idCounter++,
      ...createBookDto,
    };
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const available =  this.books.find((book) => book.id === id);
    if (!available) {
      throw new Error('Book not found');
    }
    return available;

  }

  update(id: number, updateBookDto: UpdateBookDto): Book {
    // check if book exists by index
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new Error('Book not found');
    }
    // update book
    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...updateBookDto,
    }
    return this.books[bookIndex];   
  }

  remove(id: number): void {
    // check if book exists before removing
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}