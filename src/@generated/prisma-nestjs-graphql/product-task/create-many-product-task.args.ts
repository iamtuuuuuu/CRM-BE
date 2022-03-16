import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskCreateManyInput } from './product-task-create-many.input';

@ArgsType()
export class CreateManyProductTaskArgs {

    @Field(() => [ProductTaskCreateManyInput], {nullable:false})
    data!: Array<ProductTaskCreateManyInput>;
}
