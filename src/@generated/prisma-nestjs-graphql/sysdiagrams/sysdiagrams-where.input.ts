import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BytesNullableFilter } from '../prisma/bytes-nullable-filter.input';

@InputType()
export class sysdiagramsWhereInput {

    @Field(() => [sysdiagramsWhereInput], {nullable:true})
    AND?: Array<sysdiagramsWhereInput>;

    @Field(() => [sysdiagramsWhereInput], {nullable:true})
    OR?: Array<sysdiagramsWhereInput>;

    @Field(() => [sysdiagramsWhereInput], {nullable:true})
    NOT?: Array<sysdiagramsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    principal_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    diagram_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    version?: IntNullableFilter;

    @Field(() => BytesNullableFilter, {nullable:true})
    definition?: BytesNullableFilter;
}
