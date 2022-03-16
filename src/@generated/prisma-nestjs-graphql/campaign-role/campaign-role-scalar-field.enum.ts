import { registerEnumType } from '@nestjs/graphql';

export enum CampaignRoleScalarFieldEnum {
    campaignId = "campaignId",
    roleId = "roleId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CampaignRoleScalarFieldEnum, { name: 'CampaignRoleScalarFieldEnum', description: undefined })
