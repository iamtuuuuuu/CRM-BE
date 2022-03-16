import { registerEnumType } from '@nestjs/graphql';

export enum CustomerCampaignScalarFieldEnum {
    customerId = "customerId",
    campaignId = "campaignId",
    status = "status",
    note = "note",
    id = "id"
}


registerEnumType(CustomerCampaignScalarFieldEnum, { name: 'CustomerCampaignScalarFieldEnum', description: undefined })
