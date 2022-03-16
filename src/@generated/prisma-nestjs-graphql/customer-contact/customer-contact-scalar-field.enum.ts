import { registerEnumType } from '@nestjs/graphql';

export enum CustomerContactScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    ref = "ref"
}


registerEnumType(CustomerContactScalarFieldEnum, { name: 'CustomerContactScalarFieldEnum', description: undefined })
