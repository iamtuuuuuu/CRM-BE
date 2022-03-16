import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutDepartmentInput } from './employee-create-without-department.input';
import { EmployeeCreateOrConnectWithoutDepartmentInput } from './employee-create-or-connect-without-department.input';
import { EmployeeCreateManyDepartmentInputEnvelope } from './employee-create-many-department-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutDepartmentInput {

    @Field(() => [EmployeeCreateWithoutDepartmentInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutDepartmentInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutDepartmentInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutDepartmentInput>;

    @Field(() => EmployeeCreateManyDepartmentInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyDepartmentInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}
