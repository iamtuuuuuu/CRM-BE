import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeCreateManyInput } from './employee-create-many.input';

@ArgsType()
export class CreateManyEmployeeArgs {

    @Field(() => [EmployeeCreateManyInput], {nullable:false})
    data!: Array<EmployeeCreateManyInput>;
}
