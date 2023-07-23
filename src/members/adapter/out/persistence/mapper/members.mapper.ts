import { Members } from '../../../../domain/members';
import {MembersEntity} from "../entity/members.entity";

export class MembersMapper {
  static toEntity(member: Members) {
    const props = member.props
    return new MembersEntity({
      id: props.id,
      name: props.name,
      email: props.email,
      gender: props.gender,
      age: props.age,
      status: props.status,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt
    })
  }

  static toDomain(param: any) {}
}
