import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskWhereInput } from './product-task-where.input';

@ArgsType()
export class DeleteManyProductTaskArgs {

    @Field(() => ProductTaskWhereInput, {nullable:true})
    where?: ProductTaskWhereInput;
}
