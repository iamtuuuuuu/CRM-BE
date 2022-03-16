import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentCreateInput } from './department-create.input';

@ArgsType()
export class CreateOneDepartmentArgs {

    @Field(() => DepartmentCreateInput, {nullable:false})
    data!: DepartmentCreateInput;
}
