import { Injectable } from '@nestjs/common';
import { Author } from './interfaces/author.interface';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [];
  private idCounter = 1;

  create(dto: CreateAuthorDto): Author {
    const author: Author = { 
      id: this.idCounter++, 
      ...dto 
    };
    this.authors.push(author);
    return author;
  }

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: number): Author {
    // check if author exists
    const author = this.authors.find((author) => author.id === id);
    if (!author) {
      throw new Error('Author not found');
    }
    return author;
  }

  update(id: number, dto: UpdateAuthorDto): Author {
    // check if author exists by index
    const index = this.authors.findIndex(a => a.id === id);
    if(index !== -1) {
      this.authors[index] = {
         ...this.authors[index],
          ...dto 
        };
    }
    return this.authors[index];
  }

  remove(id: number): void {
    this.authors = this.authors.filter(a => a.id !== id);
  }
}