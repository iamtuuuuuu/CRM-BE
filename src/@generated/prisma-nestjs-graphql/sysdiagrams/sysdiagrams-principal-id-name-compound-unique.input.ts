import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class sysdiagramsPrincipal_idNameCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    principal_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
