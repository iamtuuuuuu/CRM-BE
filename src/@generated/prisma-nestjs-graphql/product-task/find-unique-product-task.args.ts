import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';

@ArgsType()
export class FindUniqueProductTaskArgs {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;
}
