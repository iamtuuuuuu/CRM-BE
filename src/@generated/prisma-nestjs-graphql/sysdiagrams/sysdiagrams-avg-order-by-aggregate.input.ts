import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class sysdiagramsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    principal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    diagram_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;
}
