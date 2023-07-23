import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('member_addresses', { schema: 'test' })
export class MemberAddressesEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'member_id', default: () => "'0'" })
  memberId: number;

  @Column('varchar', { name: 'zipcode', length: 5 })
  zipcode: string;

  @Column('varchar', { name: 'address1', length: 255 })
  address1: string;

  @Column('varchar', { name: 'address2', length: 255, default: () => "'0'" })
  address2: string;

  constructor(init: MemberAddressesEntity) {
    Object.assign(this, init);
  }
}
