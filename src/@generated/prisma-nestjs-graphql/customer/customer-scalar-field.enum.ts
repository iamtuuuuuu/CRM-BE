import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    phoneNumber = "phoneNumber",
    dob = "dob",
    gender = "gender",
    address = "address",
    customerContactId = "customerContactId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
