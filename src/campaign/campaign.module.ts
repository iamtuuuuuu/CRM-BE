import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { CaslModule } from '../casl/casl.module';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [CaslModule],
  controllers: [CampaignController],
  providers: [CampaignService, PrismaService],
})
export class CampaignModule {}
