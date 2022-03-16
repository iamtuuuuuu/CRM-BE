import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentWhereInput } from './email-sent-where.input';
import { EmailSentOrderByWithRelationInput } from './email-sent-order-by-with-relation.input';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmailSentScalarFieldEnum } from './email-sent-scalar-field.enum';

@ArgsType()
export class FindManyEmailSentArgs {

    @Field(() => EmailSentWhereInput, {nullable:true})
    where?: EmailSentWhereInput;

    @Field(() => [EmailSentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmailSentOrderByWithRelationInput>;

    @Field(() => EmailSentWhereUniqueInput, {nullable:true})
    cursor?: EmailSentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmailSentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmailSentScalarFieldEnum>;
}
