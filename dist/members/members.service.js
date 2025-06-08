"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
let MembersService = class MembersService {
    constructor() {
        this.members = [];
        this.idCounter = 1;
    }
    create(dto) {
        const member = Object.assign({ id: this.idCounter++ }, dto);
        this.members.push(member);
        return member;
    }
    findAll() {
        const allMembers = this.members;
        return allMembers;
    }
    findOne(id) {
        const available = this.members.find(m => m.id === id);
        if (!available) {
            throw new Error('Member not found');
        }
        return available;
    }
    update(id, dto) {
        // check if member exists by index
        const memberindex = this.members.findIndex(m => m.id === id);
        if (memberindex === -1) {
            throw new Error('Member not found');
        }
        // check if email is unique
        const existingMember = this.members.find(m => m.email === dto.email);
        if (existingMember && existingMember.id !== id) {
            throw new Error('Email already in use');
        }
        // update member
        this.members[memberindex] = Object.assign(Object.assign({}, this.members[memberindex]), dto);
        return this.members[memberindex];
    }
    remove(id) {
        this.members = this.members.filter(m => m.id !== id);
    }
};
exports.MembersService = MembersService;
exports.MembersService = MembersService = __decorate([
    (0, common_1.Injectable)()
], MembersService);
