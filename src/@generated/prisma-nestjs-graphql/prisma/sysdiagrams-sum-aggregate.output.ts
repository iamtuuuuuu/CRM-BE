import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SysdiagramsSumAggregate {

    @Field(() => Int, {nullable:true})
    principal_id?: number;

    @Field(() => Int, {nullable:true})
    diagram_id?: number;

    @Field(() => Int, {nullable:true})
    version?: number;
}
