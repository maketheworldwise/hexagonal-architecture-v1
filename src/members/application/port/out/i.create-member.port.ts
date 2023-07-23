import { Members } from '../../../domain/members';
import { MembersEntity } from '../../../adapter/out/persistence/entity/members.entity';

export const CreateMemberPortToken = Symbol('CreateMemberPort');

export interface ICreateMemberPort {
  create(member: Members): Promise<MembersEntity>;
}
