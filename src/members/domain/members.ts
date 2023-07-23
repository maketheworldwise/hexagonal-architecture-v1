import { Entity } from '../../common/entity';

export type MembersProps = {
  id: number
  name: string
  email: string
  gender: string
  age: number
  status: string
  createdAt: Date
  updatedAt: Date
};

export class Members extends Entity<MembersProps> {
  getId() {
    return this.props.id
  }
}
