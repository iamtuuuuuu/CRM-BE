import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CampaignUncheckedCreateInput) {
    return this.prisma.campaign.create({
      data,
    });
  }

  findAll(filter?: 'Active' | 'Done' | 'Stop' | undefined) {
    if (filter) {
      return this.prisma.$queryRaw`exec getCampaignFilter @status = ${filter}`;
    } else {
      return this.prisma.$queryRaw`exec getCampaign`;
    }
  }

  findTasks(id: number) {
    return this.prisma.$queryRaw`exec getTasksOfCampaign @campaignId=${id}`;
  }

  addTask(campaignId: number, taskId: number) {
    return this.prisma.campaignTask.create({
      data: {
        campaignId: campaignId,
        taskId: taskId,
        isDone: false,
      },
    });
  }

  async updateStatus(campaignId, taskId) {
    const campaignTask = await this.prisma.campaignTask.findFirst({
      where: {
        campaignId: campaignId,
        taskId: taskId,
      },
    });
    return this.prisma.campaignTask.updateMany({
      where: {
        campaignId: campaignId,
        taskId: taskId,
      },
      data: {
        isDone: !campaignTask.isDone,
      },
    });
  }

  deleteTasksOfCampaign(id: number, taskIds: number[]) {
    return this.prisma.campaignTask.deleteMany({
      where: {
        taskId: {
          in: taskIds,
        },
        campaignId: id,
      },
    });
  }

  findCampaignStatus() {
    return this.prisma.campaignStatus.findMany();
  }

  findOne(id: number) {
    return this.prisma.campaign.findFirst({
      where: { id },
    });
  }

  update(id: number, data: Prisma.CampaignUncheckedUpdateInput) {
    return this.prisma.campaign.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const stopStatus = await this.prisma.campaignStatus.findFirst({
      where: { status: 'Stop' },
    });
    return this.prisma.campaign.update({
      where: {
        id,
      },
      data: {
        campaignStatusId: stopStatus.id,
      },
    });
  }
}
