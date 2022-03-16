import { registerEnumType } from '@nestjs/graphql';

export enum CampaignTaskScalarFieldEnum {
    campaignId = "campaignId",
    taskId = "taskId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    isDone = "isDone"
}


registerEnumType(CampaignTaskScalarFieldEnum, { name: 'CampaignTaskScalarFieldEnum', description: undefined })
