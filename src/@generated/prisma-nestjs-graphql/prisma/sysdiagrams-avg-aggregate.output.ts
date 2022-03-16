import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SysdiagramsAvgAggregate {

    @Field(() => Float, {nullable:true})
    principal_id?: number;

    @Field(() => Float, {nullable:true})
    diagram_id?: number;

    @Field(() => Float, {nullable:true})
    version?: number;
}
