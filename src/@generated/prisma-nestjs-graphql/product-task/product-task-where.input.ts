import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';

@InputType()
export class ProductTaskWhereInput {

    @Field(() => [ProductTaskWhereInput], {nullable:true})
    AND?: Array<ProductTaskWhereInput>;

    @Field(() => [ProductTaskWhereInput], {nullable:true})
    OR?: Array<ProductTaskWhereInput>;

    @Field(() => [ProductTaskWhereInput], {nullable:true})
    NOT?: Array<ProductTaskWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    productId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;
}
