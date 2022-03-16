import { registerEnumType } from '@nestjs/graphql';

export enum ProductTaskScalarFieldEnum {
    productId = "productId",
    taskId = "taskId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductTaskScalarFieldEnum, { name: 'ProductTaskScalarFieldEnum', description: undefined })
