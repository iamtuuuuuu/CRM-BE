import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeCount {

    @Field(() => Int, {nullable:false})
    EmailSent?: number;

    @Field(() => Int, {nullable:false})
    EmployeeRole?: number;

    @Field(() => Int, {nullable:false})
    Problem?: number;
}
