import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@ArgsType()
export class DeleteOneDepartmentArgs {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;
}
