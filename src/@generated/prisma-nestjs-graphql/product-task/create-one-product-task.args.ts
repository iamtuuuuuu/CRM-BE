import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskCreateInput } from './product-task-create.input';

@ArgsType()
export class CreateOneProductTaskArgs {

    @Field(() => ProductTaskCreateInput, {nullable:false})
    data!: ProductTaskCreateInput;
}
