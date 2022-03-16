import { IsString } from 'class-validator';

export class SearchCampaignDto {
  @IsString()
  search?: string;
}
