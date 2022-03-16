import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeCreateInput } from './employee-create.input';

@ArgsType()
export class CreateOneEmployeeArgs {

    @Field(() => EmployeeCreateInput, {nullable:false})
    data!: EmployeeCreateInput;
}
