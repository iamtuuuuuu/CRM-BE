import { registerEnumType } from '@nestjs/graphql';

export enum ProblemScalarFieldEnum {
    id = "id",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    note = "note",
    customerId = "customerId",
    employeeId = "employeeId"
}


registerEnumType(ProblemScalarFieldEnum, { name: 'ProblemScalarFieldEnum', description: undefined })
