import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@ArgsType()
export class FindUniqueEmployeeArgs {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;
}
