import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeRoleScalarFieldEnum {
    employeeId = "employeeId",
    roleId = "roleId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmployeeRoleScalarFieldEnum, { name: 'EmployeeRoleScalarFieldEnum', description: undefined })
