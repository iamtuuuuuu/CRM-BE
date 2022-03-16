import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { CustomerRelationFilter } from '../customer/customer-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';

@InputType()
export class EmailSentWhereInput {

    @Field(() => [EmailSentWhereInput], {nullable:true})
    AND?: Array<EmailSentWhereInput>;

    @Field(() => [EmailSentWhereInput], {nullable:true})
    OR?: Array<EmailSentWhereInput>;

    @Field(() => [EmailSentWhereInput], {nullable:true})
    NOT?: Array<EmailSentWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    customerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    employeeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => CustomerRelationFilter, {nullable:true})
    customer?: CustomerRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;
}
