import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SysdiagramsMinAggregate {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    principal_id?: number;

    @Field(() => Int, {nullable:true})
    diagram_id?: number;

    @Field(() => Int, {nullable:true})
    version?: number;

    @Field(() => String, {nullable:true})
    definition?: Buffer;
}
