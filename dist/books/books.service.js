"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor() {
        this.books = [];
        this.idCounter = 1;
    }
    create(createBookDto) {
        const book = Object.assign({ id: this.idCounter++ }, createBookDto);
        this.books.push(book);
        return book;
    }
    findAll() {
        return this.books;
    }
    findOne(id) {
        const available = this.books.find((book) => book.id === id);
        if (!available) {
            throw new Error('Book not found');
        }
        return available;
    }
    update(id, updateBookDto) {
        // check if book exists by index
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            throw new Error('Book not found');
        }
        // update book
        this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), updateBookDto);
        return this.books[bookIndex];
    }
    remove(id) {
        // check if book exists before removing
        const index = this.books.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
