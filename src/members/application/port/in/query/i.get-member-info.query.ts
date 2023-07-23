export const GetMemberInfoQueryToken = Symbol('GetMemberInfoQuery')

export interface IGetMemberInfoQuery {
  get(memberId: number): Promise<any>;
}
