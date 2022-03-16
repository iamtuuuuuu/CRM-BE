import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentUpdateInput } from './department-update.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@ArgsType()
export class UpdateOneDepartmentArgs {

    @Field(() => DepartmentUpdateInput, {nullable:false})
    data!: DepartmentUpdateInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;
}
