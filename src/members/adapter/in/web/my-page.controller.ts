import {Controller, Get, Inject, Param} from "@nestjs/common";
import {GetMemberInfoQueryToken, IGetMemberInfoQuery} from "../../../application/port/in/query/i.get-member-info.query";

@Controller('me')
export class MyPageController {
    @Inject(GetMemberInfoQueryToken)
    private readonly getMemberInfoService: IGetMemberInfoQuery

    @Get(':id')
    async getMe(@Param('id') memberId: number) {
        return await this.getMemberInfoService.get(memberId)
    }
}