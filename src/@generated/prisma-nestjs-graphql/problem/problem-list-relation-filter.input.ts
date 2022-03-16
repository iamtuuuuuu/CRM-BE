import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';

@InputType()
export class ProblemListRelationFilter {

    @Field(() => ProblemWhereInput, {nullable:true})
    every?: ProblemWhereInput;

    @Field(() => ProblemWhereInput, {nullable:true})
    some?: ProblemWhereInput;

    @Field(() => ProblemWhereInput, {nullable:true})
    none?: ProblemWhereInput;
}
