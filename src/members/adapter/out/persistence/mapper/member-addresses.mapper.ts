import { MemberAddresses } from '../../../../domain/member-addresses';
import { MemberAddressesEntity } from '../entity/member-addresses.entity';

export class MemberAddressesMapper {
  static toEntity(address: MemberAddresses) {
    const addressProps = address.props;
    return new MemberAddressesEntity({
      id: addressProps.id,
      memberId: addressProps.memberId,
      zipcode: addressProps.zipcode,
      address1: addressProps.address1,
      address2: addressProps.address2,
    });
  }

  static toDomain() {}
}
