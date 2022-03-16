import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateInput } from './employee-create.input';
import { EmployeeUpdateInput } from './employee-update.input';

@ArgsType()
export class UpsertOneEmployeeArgs {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateInput, {nullable:false})
    create!: EmployeeCreateInput;

    @Field(() => EmployeeUpdateInput, {nullable:false})
    update!: EmployeeUpdateInput;
}
