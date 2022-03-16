import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeUpdateManyMutationInput } from './employee-update-many-mutation.input';
import { EmployeeWhereInput } from './employee-where.input';

@ArgsType()
export class UpdateManyEmployeeArgs {

    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: EmployeeUpdateManyMutationInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: EmployeeWhereInput;
}
