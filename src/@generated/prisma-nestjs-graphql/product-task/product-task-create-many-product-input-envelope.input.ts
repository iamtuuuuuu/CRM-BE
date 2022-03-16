import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskCreateManyProductInput } from './product-task-create-many-product.input';

@InputType()
export class ProductTaskCreateManyProductInputEnvelope {

    @Field(() => [ProductTaskCreateManyProductInput], {nullable:false})
    data!: Array<ProductTaskCreateManyProductInput>;
}
