import { MemberAddresses } from '../../../domain/member-addresses';

export const CreateMemberAddressPortToken = Symbol('CreateMemberAddressPort');

export interface ICreateMemberAddressPort {
  create(address: MemberAddresses): Promise<void>;
}
