import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BytesNullableWithAggregatesFilter } from '../prisma/bytes-nullable-with-aggregates-filter.input';

@InputType()
export class sysdiagramsScalarWhereWithAggregatesInput {

    @Field(() => [sysdiagramsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<sysdiagramsScalarWhereWithAggregatesInput>;

    @Field(() => [sysdiagramsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<sysdiagramsScalarWhereWithAggregatesInput>;

    @Field(() => [sysdiagramsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<sysdiagramsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    principal_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    diagram_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    version?: IntNullableWithAggregatesFilter;

    @Field(() => BytesNullableWithAggregatesFilter, {nullable:true})
    definition?: BytesNullableWithAggregatesFilter;
}
