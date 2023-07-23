import { Module, Provider } from '@nestjs/common';
import { JoinMemberController } from './adapter/in/web/join-member.controller';
import { MyPageController } from './adapter/in/web/my-page.controller';
import { JoinMemberUsecaseToken } from './application/port/in/usecase/i.join-member.usecase';
import { JoinMemberService } from './application/service/join-member.service';
import { CreateMemberPortToken } from './application/port/out/i.create-member.port';
import { CreateMemberAdapter } from './adapter/out/persistence/adapter/create-member.adapter';
import { CreateMemberAddressPortToken } from './application/port/out/i.create-member-address.port';
import { CreateMemberAddressAdapter } from './adapter/out/persistence/adapter/create-member-address.adapter';
import { GetMemberInfoQueryToken } from './application/port/in/query/i.get-member-info.query';
import { GetMemberInfoService } from './application/service/get-member-info.service';
import { MembersRepository } from './adapter/out/persistence/repository/members.repository';
import { MemberAddressesRepository } from './adapter/out/persistence/repository/member-addresses.repository';
import { ReadMemberAdapter } from './adapter/out/persistence/adapter/read-member.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersEntity } from './adapter/out/persistence/entity/members.entity';
import { MemberAddressesEntity } from './adapter/out/persistence/entity/member-addresses.entity';

const application: Provider[] = [
  {
    provide: JoinMemberUsecaseToken,
    useClass: JoinMemberService,
  },
  {
    provide: GetMemberInfoQueryToken,
    useClass: GetMemberInfoService,
  },
];

const persistence: Provider[] = [
  MembersRepository,
  MemberAddressesRepository,
  {
    provide: CreateMemberPortToken,
    useClass: CreateMemberAdapter,
  },
  {
    provide: CreateMemberAddressPortToken,
    useClass: CreateMemberAddressAdapter,
  },
];

const services: Provider[] = [ReadMemberAdapter];

@Module({
  imports: [TypeOrmModule.forFeature([MembersEntity, MemberAddressesEntity])],
  controllers: [JoinMemberController, MyPageController],
  providers: [...application, ...persistence, ...services],
  exports: [...application, ...persistence, ...services],
})
export class MembersModule {}
