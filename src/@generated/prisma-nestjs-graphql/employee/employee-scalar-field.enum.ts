import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    name = "name",
    email = "email",
    phoneNumber = "phoneNumber",
    password = "password",
    status = "status",
    departmentId = "departmentId"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
