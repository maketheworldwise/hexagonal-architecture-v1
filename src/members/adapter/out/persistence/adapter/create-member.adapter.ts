import { ICreateMemberPort } from '../../../../application/port/out/i.create-member.port';
import { MembersMapper } from '../mapper/members.mapper';
import { Injectable } from '@nestjs/common';
import { Members } from '../../../../domain/members';
import { MembersEntity } from '../entity/members.entity';
import {MembersRepository} from "../repository/members.repository";

@Injectable()
export class CreateMemberAdapter implements ICreateMemberPort {
  constructor(private readonly membersRepository: MembersRepository) {}

  async create(member: Members): Promise<MembersEntity> {
    const entity = MembersMapper.toEntity(member);
    return await this.membersRepository.save(entity);
  }
}
