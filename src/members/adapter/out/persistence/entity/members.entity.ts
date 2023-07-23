import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('members', { schema: 'test' })
export class MembersEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('enum', {
    name: 'gender',
    enum: ['man', 'woman'],
    default: () => "'man'",
  })
  gender: string;

  @Column('int', { name: 'age', default: () => "'0'" })
  age: number;

  @Column('enum', {
    name: 'status',
    enum: ['active', 'deleted'],
    default: () => "'active'",
  })
  status: string;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  constructor(init: MembersEntity) {
    Object.assign(this, init)
  }
}
