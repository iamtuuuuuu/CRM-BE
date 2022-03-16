import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentWhereInput } from './email-sent-where.input';

@InputType()
export class EmailSentListRelationFilter {

    @Field(() => EmailSentWhereInput, {nullable:true})
    every?: EmailSentWhereInput;

    @Field(() => EmailSentWhereInput, {nullable:true})
    some?: EmailSentWhereInput;

    @Field(() => EmailSentWhereInput, {nullable:true})
    none?: EmailSentWhereInput;
}
