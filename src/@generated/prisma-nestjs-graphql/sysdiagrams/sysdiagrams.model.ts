import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class sysdiagrams {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    principal_id!: number;

    @Field(() => ID, {nullable:false})
    diagram_id!: number;

    @Field(() => Int, {nullable:true})
    version!: number | null;

    @Field(() => String, {nullable:true})
    definition!: Buffer | null;
}
