import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentWhereInput } from './email-sent-where.input';
import { EmailSentOrderByWithRelationInput } from './email-sent-order-by-with-relation.input';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmailSentCountAggregateInput } from './email-sent-count-aggregate.input';
import { EmailSentAvgAggregateInput } from './email-sent-avg-aggregate.input';
import { EmailSentSumAggregateInput } from './email-sent-sum-aggregate.input';
import { EmailSentMinAggregateInput } from './email-sent-min-aggregate.input';
import { EmailSentMaxAggregateInput } from './email-sent-max-aggregate.input';

@ArgsType()
export class EmailSentAggregateArgs {

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

    @Field(() => EmailSentCountAggregateInput, {nullable:true})
    _count?: EmailSentCountAggregateInput;

    @Field(() => EmailSentAvgAggregateInput, {nullable:true})
    _avg?: EmailSentAvgAggregateInput;

    @Field(() => EmailSentSumAggregateInput, {nullable:true})
    _sum?: EmailSentSumAggregateInput;

    @Field(() => EmailSentMinAggregateInput, {nullable:true})
    _min?: EmailSentMinAggregateInput;

    @Field(() => EmailSentMaxAggregateInput, {nullable:true})
    _max?: EmailSentMaxAggregateInput;
}
