import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskCreateManyTaskInput } from './product-task-create-many-task.input';

@InputType()
export class ProductTaskCreateManyTaskInputEnvelope {

    @Field(() => [ProductTaskCreateManyTaskInput], {nullable:false})
    data!: Array<ProductTaskCreateManyTaskInput>;
}
