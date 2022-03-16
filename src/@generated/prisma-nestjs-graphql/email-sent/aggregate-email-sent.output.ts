import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmailSentCountAggregate } from './email-sent-count-aggregate.output';
import { EmailSentAvgAggregate } from './email-sent-avg-aggregate.output';
import { EmailSentSumAggregate } from './email-sent-sum-aggregate.output';
import { EmailSentMinAggregate } from './email-sent-min-aggregate.output';
import { EmailSentMaxAggregate } from './email-sent-max-aggregate.output';

@ObjectType()
export class AggregateEmailSent {

    @Field(() => EmailSentCountAggregate, {nullable:true})
    _count?: EmailSentCountAggregate;

    @Field(() => EmailSentAvgAggregate, {nullable:true})
    _avg?: EmailSentAvgAggregate;

    @Field(() => EmailSentSumAggregate, {nullable:true})
    _sum?: EmailSentSumAggregate;

    @Field(() => EmailSentMinAggregate, {nullable:true})
    _min?: EmailSentMinAggregate;

    @Field(() => EmailSentMaxAggregate, {nullable:true})
    _max?: EmailSentMaxAggregate;
}
