import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskProductIdTaskIdCompoundUniqueInput } from './product-task-product-id-task-id-compound-unique.input';

@InputType()
export class ProductTaskWhereUniqueInput {

    @Field(() => ProductTaskProductIdTaskIdCompoundUniqueInput, {nullable:true})
    productId_taskId?: ProductTaskProductIdTaskIdCompoundUniqueInput;
}
