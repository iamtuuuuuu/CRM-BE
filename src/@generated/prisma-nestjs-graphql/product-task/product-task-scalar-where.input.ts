import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductTaskScalarWhereInput {

    @Field(() => [ProductTaskScalarWhereInput], {nullable:true})
    AND?: Array<ProductTaskScalarWhereInput>;

    @Field(() => [ProductTaskScalarWhereInput], {nullable:true})
    OR?: Array<ProductTaskScalarWhereInput>;

    @Field(() => [ProductTaskScalarWhereInput], {nullable:true})
    NOT?: Array<ProductTaskScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    productId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
