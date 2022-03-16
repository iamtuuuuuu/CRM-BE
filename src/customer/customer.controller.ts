import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { AbilitiesGuard } from '../casl/casl-ability.guard';
import { CheckAbilities } from '../casl/casl-ability.decorator';
import { Action } from '../casl/casl-ability.factory';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Customer } from '../@generated/prisma-nestjs-graphql/customer/customer.model';
import { Prisma } from '@prisma/client';
import { GetUser } from '../decorator/get-user.decorator';
import { DeleteTasksDto } from '../task/dto/delete-tasks.dto';
import { MailContentDto } from './dto/mail-content.dto';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateCampaignCustomerDto } from "./dto/update-campaign-customer.dto";

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Create, subject: Customer })
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createCustomerDto: Prisma.CustomerUncheckedCreateInput,
    @GetUser() user,
  ) {
    console.log('user: ', user);
    const customerContact = await this.customerService.findCustomerContact(
      user.email,
    );
    createCustomerDto.customerContactId = customerContact.id;
    createCustomerDto.status = 'active';
    createCustomerDto.dob = new Date(createCustomerDto.dob);
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Customer })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.customerService.findAll();
  }

  @Get('/send-mail/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Customer })
  @UseGuards(JwtAuthGuard)
  findMail(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findMail(id);
  }

  @Post('/send-mail/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Customer })
  @UseGuards(JwtAuthGuard)
  sendMail(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: MailContentDto,
    @GetUser() user,
  ) {
    return this.customerService.sendMail(id, data.content, user.id);
  }

  @Post('/problem/:customerId')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Customer })
  @UseGuards(JwtAuthGuard)
  createProblem(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() data: CreateProblemDto,
    @GetUser() user,
  ) {
    return this.customerService.createProblem(customerId, user.id, data);
  }

  @Get('/problem/:customerId')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Customer })
  @UseGuards(JwtAuthGuard)
  findProblem(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customerService.findProblem(customerId);
  }

  @Patch('/problem/:problemId')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Customer })
  @UseGuards(JwtAuthGuard)
  editProblem(
    @Param('problemId', ParseIntPipe) problemId: number,
    @Body() data: CreateProblemDto,
  ) {
    return this.customerService.editProblem(problemId, data);
  }

  @Get('/campaign/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Customer })
  @UseGuards(JwtAuthGuard)
  getCampaignOfCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.getCampaignOfCustomer(id);
  }

  @Post('/campaign/:customerId/:campaignId')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Customer })
  @UseGuards(JwtAuthGuard)
  addCampaignForCustomer(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Param('campaignId', ParseIntPipe) campaignId: number,
  ) {
    return this.customerService.addCustomerToCampaign(customerId, campaignId);
  }

  @Patch('/campaign/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Customer })
  @UseGuards(JwtAuthGuard)
  editCampaignForCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCampaignCustomerDto,
  ) {
    return this.customerService.editCustomerToCampaign(id, data);
  }

  @Patch('/delete-campaign/:customerId')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Delete, subject: Customer })
  @UseGuards(JwtAuthGuard)
  removeCampaignForCustomer(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() data: DeleteTasksDto,
  ) {
    console.log('abc: ', data);
    return this.customerService.deleteCustomerToCampaign(customerId, data.ids);
  }

  @Get(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Customer })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Customer })
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomerDto: Prisma.CustomerUncheckedUpdateInput,
  ) {
    const sdob = updateCustomerDto.dob as string;
    updateCustomerDto.dob = new Date(sdob);
    return this.customerService.update(id, updateCustomerDto);
  }
}
