import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';

@ArgsType()
export class DeleteManyDepartmentArgs {

    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: DepartmentWhereInput;
}
