import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CampaignTask } from '../campaign-task/campaign-task.model';
import { ProductTask } from '../product-task/product-task.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [CampaignTask], {nullable:true})
    CampaignTask?: Array<CampaignTask>;

    @Field(() => [ProductTask], {nullable:true})
    ProductTask?: Array<ProductTask>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
