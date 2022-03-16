import { registerEnumType } from '@nestjs/graphql';

export enum CampaignScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    description = "description",
    campaignStatusId = "campaignStatusId",
    linkImg = "linkImg"
}


registerEnumType(CampaignScalarFieldEnum, { name: 'CampaignScalarFieldEnum', description: undefined })
