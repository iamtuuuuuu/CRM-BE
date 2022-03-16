import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EmailSentAvgAggregate {

    @Field(() => Float, {nullable:true})
    customerId?: number;

    @Field(() => Float, {nullable:true})
    employeeId?: number;

    @Field(() => Float, {nullable:true})
    id?: number;
}
