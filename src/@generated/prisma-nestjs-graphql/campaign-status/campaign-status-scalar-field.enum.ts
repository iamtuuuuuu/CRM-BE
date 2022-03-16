import { registerEnumType } from '@nestjs/graphql';

export enum CampaignStatusScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status"
}


registerEnumType(CampaignStatusScalarFieldEnum, { name: 'CampaignStatusScalarFieldEnum', description: undefined })
