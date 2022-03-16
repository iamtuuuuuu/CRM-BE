import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { AbilitiesGuard } from '../casl/casl-ability.guard';
import { CheckAbilities } from '../casl/casl-ability.decorator';
import { Action } from '../casl/casl-ability.factory';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../product/configs/multer.config';
import { Prisma } from '@prisma/client';
import uploadImage from '../utils/imgbbUploader.utils';
import { Campaign } from '../@generated/prisma-nestjs-graphql/campaign/campaign.model';
import { FilterQueryDto } from './dto/filter-query.dto';
import { SearchCampaignDto } from './dto/search-campaign.dto';
import { Product } from '../@generated/prisma-nestjs-graphql/product/product.model';
import { DeleteTaskForProductDto } from '../product/dto/delete-task-for-product.dto';
import { AddTaskForProductDto } from '../product/dto/add-task-for-product.dto';

@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Create, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('linkImg', multerOptions))
  async create(
    @Body() data: Prisma.CampaignUncheckedCreateInput,
    @UploadedFile() linkImg: Express.Multer.File,
  ) {
    const link = await uploadImage(linkImg.path);
    data.campaignStatusId = +data.campaignStatusId;
    return this.campaignService.create({ ...data, linkImg: link });
  }

  @Get()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  findAll(@Query() query?: FilterQueryDto) {
    return this.campaignService.findAll(query.filter);
  }

  @Get('/status')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  getAllCampaignStatus() {
    return this.campaignService.findCampaignStatus();
  }

  @Get('/get-tasks/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  getTasks(@Param('id', ParseIntPipe) id: number) {
    return this.campaignService.findTasks(id);
  }

  @Post('/add-task/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  addTaskForCampaign(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: AddTaskForProductDto,
  ) {
    return this.campaignService.addTask(id, data.id);
  }

  @Patch('/change-status/:id/:taskId')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Param('taskId', ParseIntPipe) taskId: number,
  ) {
    return this.campaignService.updateStatus(id, taskId);
  }

  @Delete('/delete-tasks/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  deleteTasks(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: DeleteTaskForProductDto,
  ) {
    return this.campaignService.deleteTasksOfCampaign(id, data.ids);
  }

  @Get(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.campaignService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Campaign })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('linkImg', multerOptions))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCampaignDto: Prisma.CampaignUncheckedUpdateInput,
    @UploadedFile() linkImg: Express.Multer.File,
  ) {
    updateCampaignDto.campaignStatusId = +updateCampaignDto.campaignStatusId;

    if (linkImg) {
      const link = await uploadImage(linkImg.path);
      return this.campaignService.update(id, {
        ...updateCampaignDto,
        linkImg: link,
      });
    }
    return this.campaignService.update(id, updateCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.campaignService.remove(id);
  }
}
