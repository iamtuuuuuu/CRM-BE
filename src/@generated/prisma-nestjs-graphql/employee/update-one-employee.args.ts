import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeUpdateInput } from './employee-update.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@ArgsType()
export class UpdateOneEmployeeArgs {

    @Field(() => EmployeeUpdateInput, {nullable:false})
    data!: EmployeeUpdateInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;
}
