import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MembersEntity } from '../entity/members.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MembersRepository extends Repository<MembersEntity> {
  constructor(
    @InjectRepository(MembersEntity)
    private readonly repository: Repository<MembersEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
