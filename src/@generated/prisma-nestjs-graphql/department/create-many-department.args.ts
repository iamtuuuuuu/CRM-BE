import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentCreateManyInput } from './department-create-many.input';

@ArgsType()
export class CreateManyDepartmentArgs {

    @Field(() => [DepartmentCreateManyInput], {nullable:false})
    data!: Array<DepartmentCreateManyInput>;
}
