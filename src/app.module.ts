import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { ProductModule } from './product/product.module';
import { CampaignModule } from './campaign/campaign.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { RoleModule } from './role/role.module';
import { MulterModule } from '@nestjs/platform-express';
import { TaskModule } from './task/task.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    EmployeeModule,
    DepartmentModule,
    ProductModule,
    CampaignModule,
    CustomerModule,
    AuthModule,
    CaslModule,
    RoleModule,
    MulterModule.register({
      dest: './uploads',
    }),
    TaskModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
