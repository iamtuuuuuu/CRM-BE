import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SysdiagramsCountAggregate {

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    principal_id!: number;

    @Field(() => Int, {nullable:false})
    diagram_id!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Int, {nullable:false})
    definition!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
