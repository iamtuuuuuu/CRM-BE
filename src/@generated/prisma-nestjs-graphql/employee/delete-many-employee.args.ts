import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';

@ArgsType()
export class DeleteManyEmployeeArgs {

    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: EmployeeWhereInput;
}
