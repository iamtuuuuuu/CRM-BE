import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class EmailSentScalarWhereInput {

    @Field(() => [EmailSentScalarWhereInput], {nullable:true})
    AND?: Array<EmailSentScalarWhereInput>;

    @Field(() => [EmailSentScalarWhereInput], {nullable:true})
    OR?: Array<EmailSentScalarWhereInput>;

    @Field(() => [EmailSentScalarWhereInput], {nullable:true})
    NOT?: Array<EmailSentScalarWhereInput>;

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
}
