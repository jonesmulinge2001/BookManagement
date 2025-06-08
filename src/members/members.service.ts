import { Injectable } from '@nestjs/common';
import { Member } from './interfaces/member.interface';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService {
  private members: Member[] = [];
  private idCounter = 1;

  create(dto: CreateMemberDto): Member {
    const member: Member = { id: this.idCounter++, ...dto };
    this.members.push(member);
    return member;
  }

  findAll(): Member[] {
    const allMembers = this.members;
    return allMembers;
  }

  findOne(id: number): Member {
    const available =  this.members.find(m => m.id === id);
    if (!available) {
      throw new Error('Member not found');
    }
    return available;
  }

  update(id: number, dto: UpdateMemberDto): Member {
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
    this.members[memberindex] = { 
      ...this.members[memberindex],
       ...dto 
      };
      return this.members[memberindex];

  }

  remove(id: number): void {
    this.members = this.members.filter(m => m.id !== id);
  }
}