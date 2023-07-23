import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  IJoinMemberUsecase,
  JoinMemberUsecaseToken,
} from '../../../application/port/in/usecase/i.join-member.usecase';
import { JoinMemberDto } from './dto/join-member.dto';
import { JoinMemberCommand } from '../../../application/port/in/command/join-member.command';
import { JoinMemberAddressCommand } from '../../../application/port/in/command/join-member-address.command';

@Controller('join')
export class JoinMemberController {
  @Inject(JoinMemberUsecaseToken)
  private readonly joinMemberService: IJoinMemberUsecase;

  @Post()
  async join(@Body() dto: JoinMemberDto) {
    const member = new JoinMemberCommand({
      name: dto.name,
      email: dto.email,
      gender: dto.gender,
      age: dto.age,
    });

    const address = new JoinMemberAddressCommand({
      zipcode: dto.zipcode,
      address1: dto.address1,
      address2: dto.address2,
    });

    await this.joinMemberService.join(member, address);
    return 'ok'
  }
}
