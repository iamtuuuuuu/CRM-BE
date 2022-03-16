import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { sysdiagramsPrincipal_idNameCompoundUniqueInput } from './sysdiagrams-principal-id-name-compound-unique.input';

@InputType()
export class sysdiagramsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    diagram_id?: number;

    @Field(() => sysdiagramsPrincipal_idNameCompoundUniqueInput, {nullable:true})
    principal_id_name?: sysdiagramsPrincipal_idNameCompoundUniqueInput;
}
