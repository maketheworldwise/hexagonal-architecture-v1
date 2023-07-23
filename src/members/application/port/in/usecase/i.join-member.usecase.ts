import { JoinMemberCommand } from '../command/join-member.command';
import { JoinMemberAddressCommand } from '../command/join-member-address.command';

export const JoinMemberUsecaseToken = Symbol('JoinMemberUsecase');

export interface IJoinMemberUsecase {
  join(
    member: JoinMemberCommand,
    address: JoinMemberAddressCommand,
  ): Promise<void>;
}
