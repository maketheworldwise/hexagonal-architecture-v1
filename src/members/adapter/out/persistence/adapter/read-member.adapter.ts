import { Injectable } from '@nestjs/common';
import { MembersRepository } from '../repository/members.repository';

@Injectable()
export class ReadMemberAdapter {
  constructor(private readonly membersRepository: MembersRepository) {}

  async findMemberInfo(memberId: number) {
    return await this.membersRepository.findOneBy({ id: memberId });
  }
}
