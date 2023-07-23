import { IGetMemberInfoQuery } from '../port/in/query/i.get-member-info.query';
import { Injectable } from '@nestjs/common';
import { ReadMemberAdapter } from '../../adapter/out/persistence/adapter/read-member.adapter';

@Injectable()
export class GetMemberInfoService implements IGetMemberInfoQuery {
  constructor(private readonly readMemberAdapter: ReadMemberAdapter) {}

  async get(memberId: number): Promise<any> {
    const memberEntity = await this.readMemberAdapter.findMemberInfo(memberId)
    return{
      name: memberEntity.name,
      email: memberEntity.email,
      gender: memberEntity.gender,
      age: memberEntity.age,
    }
  }
}
