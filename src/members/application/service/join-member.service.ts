import { Inject, Injectable } from '@nestjs/common';
import { IJoinMemberUsecase } from '../port/in/usecase/i.join-member.usecase';
import {
  CreateMemberPortToken,
  ICreateMemberPort,
} from '../port/out/i.create-member.port';
import {
  CreateMemberAddressPortToken,
  ICreateMemberAddressPort,
} from '../port/out/i.create-member-address.port';
import { JoinMemberCommand } from '../port/in/command/join-member.command';
import { JoinMemberAddressCommand } from '../port/in/command/join-member-address.command';
import { Transactional } from 'typeorm-transactional';
import { Members } from '../../domain/members';
import {MemberAddresses} from "../../domain/member-addresses";

@Injectable()
export class JoinMemberService implements IJoinMemberUsecase {
  @Inject(CreateMemberPortToken)
  private readonly createMemberAdapter: ICreateMemberPort;

  @Inject(CreateMemberAddressPortToken)
  private readonly createMemberAddressAdapter: ICreateMemberAddressPort;

  @Transactional()
  async join(
    member: JoinMemberCommand,
    address: JoinMemberAddressCommand,
  ): Promise<void> {
    // business logic
    const memberDomain = new Members({
      id: member.getId(),
      name: member.getName(),
      email: member.getEmail(),
      gender: member.getGender(),
      age: member.getAge(),
      status: member.getStatus(),
      createdAt: member.getCreatedAt(),
      updatedAt: member.getUpdatedAt(),
    });

    const memberEntity = await this.createMemberAdapter.create(memberDomain);
    const memberId = memberEntity.id

    const memberAddressDomain = new MemberAddresses({
      id: address.getId(),
      memberId: memberId,
      zipcode: address.getZipcode(),
      address1: address.getAddress1(),
      address2: address.getAddress2(),
    })
    await this.createMemberAddressAdapter.create(memberAddressDomain);
  }
}
