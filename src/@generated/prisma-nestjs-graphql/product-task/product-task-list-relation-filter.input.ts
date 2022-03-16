import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskWhereInput } from './product-task-where.input';

@InputType()
export class ProductTaskListRelationFilter {

    @Field(() => ProductTaskWhereInput, {nullable:true})
    every?: ProductTaskWhereInput;

    @Field(() => ProductTaskWhereInput, {nullable:true})
    some?: ProductTaskWhereInput;

    @Field(() => ProductTaskWhereInput, {nullable:true})
    none?: ProductTaskWhereInput;
}
