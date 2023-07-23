import { Entity } from '../../common/entity';

export type MemberAddressesProps = {
  id: number;
  memberId: number;
  zipcode: string;
  address1: string;
  address2: string;
};

export class MemberAddresses extends Entity<MemberAddressesProps> {
  getId() {
    return this.props.id;
  }
}
