import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyDepartmentInput } from './employee-create-many-department.input';

@InputType()
export class EmployeeCreateManyDepartmentInputEnvelope {

    @Field(() => [EmployeeCreateManyDepartmentInput], {nullable:false})
    data!: Array<EmployeeCreateManyDepartmentInput>;
}
