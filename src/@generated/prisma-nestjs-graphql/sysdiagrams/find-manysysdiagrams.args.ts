import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsWhereInput } from './sysdiagrams-where.input';
import { sysdiagramsOrderByWithRelationInput } from './sysdiagrams-order-by-with-relation.input';
import { sysdiagramsWhereUniqueInput } from './sysdiagrams-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SysdiagramsScalarFieldEnum } from '../prisma/sysdiagrams-scalar-field.enum';

@ArgsType()
export class FindManysysdiagramsArgs {

    @Field(() => sysdiagramsWhereInput, {nullable:true})
    where?: sysdiagramsWhereInput;

    @Field(() => [sysdiagramsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<sysdiagramsOrderByWithRelationInput>;

    @Field(() => sysdiagramsWhereUniqueInput, {nullable:true})
    cursor?: sysdiagramsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SysdiagramsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SysdiagramsScalarFieldEnum>;
}
