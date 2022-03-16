import { registerEnumType } from '@nestjs/graphql';

export enum EmailSentScalarFieldEnum {
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content",
    customerId = "customerId",
    employeeId = "employeeId",
    id = "id"
}


registerEnumType(EmailSentScalarFieldEnum, { name: 'EmailSentScalarFieldEnum', description: undefined })
