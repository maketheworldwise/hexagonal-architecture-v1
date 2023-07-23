import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberAddressesEntity } from '../entity/member-addresses.entity';

@Injectable()
export class MemberAddressesRepository extends Repository<MemberAddressesEntity> {
  constructor(
    @InjectRepository(MemberAddressesEntity)
    private readonly repository: Repository<MemberAddressesEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
