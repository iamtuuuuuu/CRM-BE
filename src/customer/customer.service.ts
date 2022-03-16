import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { MailService } from '../mail/mail.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateCampaignCustomerDto } from './dto/update-campaign-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailService,
  ) {}

  create(data: Prisma.CustomerUncheckedCreateInput) {
    return this.prisma.customer.create({
      data,
    });
  }

  findCustomerContact(ref: string) {
    return this.prisma.customerContact.findFirst({
      where: {
        ref,
      },
    });
  }

  addCustomerToCampaign(customerId: number, campaignId: number) {
    return this.prisma.customerCampaign.create({
      data: {
        customerId,
        campaignId,
        status: 'active',
      },
    });
  }

  editCustomerToCampaign(id: number, data: UpdateCampaignCustomerDto) {
    return this.prisma.customerCampaign.update({
      where: { id },
      data,
    });
  }

  deleteCustomerToCampaign(customerId: number, ids: number[]) {
    return this.prisma.customerCampaign.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  findAll() {
    return this.prisma.$queryRaw`getCustomer`;
  }

  getCampaignOfCustomer(id: number) {
    return this.prisma.$queryRaw`exec getCampaignOfCustomer  @customerId=${id}`;
  }

  findOne(id: number) {
    return this.prisma.customer.findFirst({
      where: { id },
    });
  }

  update(id: number, data: Prisma.CustomerUncheckedUpdateInput) {
    return this.prisma.customer.update({
      where: { id },
      data,
    });
  }

  findMail(customerId: number) {
    return this.prisma.emailSent.findMany({
      where: {
        customerId,
      },
    });
  }

  createProblem(
    customerId: number,
    employeeId: number,
    data: CreateProblemDto,
  ) {
    return this.prisma.problem.create({
      data: {
        customerId,
        employeeId,
        ...data,
      },
    });
  }

  findProblem(customerId: number) {
    return this.prisma
      .$queryRaw` exec findProblemOfCustomer @customerId = ${customerId}`;
  }

  editProblem(id: number, data: CreateProblemDto) {
    return this.prisma.problem.update({
      where: {
        id,
      },
      data,
    });
  }

  async sendMail(id: number, content: string, employeeId: number) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id,
      },
    });

    if (!customer)
      throw new InternalServerErrorException('Customer not found!');

    await this.mailerService.sendMail(customer.name, customer.email, content);
    return this.prisma.emailSent.create({
      data: {
        customerId: customer.id,
        employeeId: employeeId,
        content: content,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
