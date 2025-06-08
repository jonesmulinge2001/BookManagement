"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
let AuthorsService = class AuthorsService {
    constructor() {
        this.authors = [];
        this.idCounter = 1;
    }
    create(dto) {
        const author = Object.assign({ id: this.idCounter++ }, dto);
        this.authors.push(author);
        return author;
    }
    findAll() {
        return this.authors;
    }
    findOne(id) {
        const author = this.authors.find(a => a.id === id);
        if (author) {
        }
    }
    update(id, dto) {
        const author = this.findOne(id);
        if (author)
            Object.assign(author, dto);
        return author;
    }
    remove(id) {
        this.authors = this.authors.filter(a => a.id !== id);
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = __decorate([
    (0, common_1.Injectable)()
], AuthorsService);
