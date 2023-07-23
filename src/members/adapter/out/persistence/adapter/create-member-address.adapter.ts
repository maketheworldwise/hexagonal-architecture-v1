import { ICreateMemberAddressPort } from '../../../../application/port/out/i.create-member-address.port';
import { Injectable } from '@nestjs/common';
import { MemberAddresses } from '../../../../domain/member-addresses';
import { MemberAddressesMapper } from '../mapper/member-addresses.mapper';
import { MemberAddressesRepository } from '../repository/member-addresses.repository';

@Injectable()
export class CreateMemberAddressAdapter implements ICreateMemberAddressPort {

  constructor(private readonly memberAddressesRepository: MemberAddressesRepository) {}

  async create(address: MemberAddresses): Promise<void> {
    const entity = MemberAddressesMapper.toEntity(address);
    await this.memberAddressesRepository.save(entity)
  }
}
