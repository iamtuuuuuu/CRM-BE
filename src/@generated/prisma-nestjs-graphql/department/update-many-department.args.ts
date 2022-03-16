import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentUpdateManyMutationInput } from './department-update-many-mutation.input';
import { DepartmentWhereInput } from './department-where.input';

@ArgsType()
export class UpdateManyDepartmentArgs {

    @Field(() => DepartmentUpdateManyMutationInput, {nullable:false})
    data!: DepartmentUpdateManyMutationInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: DepartmentWhereInput;
}
