import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskWhereInput } from './product-task-where.input';
import { ProductTaskOrderByWithRelationInput } from './product-task-order-by-with-relation.input';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTaskScalarFieldEnum } from './product-task-scalar-field.enum';

@ArgsType()
export class FindManyProductTaskArgs {

    @Field(() => ProductTaskWhereInput, {nullable:true})
    where?: ProductTaskWhereInput;

    @Field(() => [ProductTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductTaskOrderByWithRelationInput>;

    @Field(() => ProductTaskWhereUniqueInput, {nullable:true})
    cursor?: ProductTaskWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductTaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductTaskScalarFieldEnum>;
}
