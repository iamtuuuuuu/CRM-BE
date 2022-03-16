import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CampaignRole } from '../campaign-role/campaign-role.model';
import { EmployeeRole } from '../employee-role/employee-role.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => [CampaignRole], {nullable:true})
    CampaignRole?: Array<CampaignRole>;

    @Field(() => [EmployeeRole], {nullable:true})
    EmployeeRole?: Array<EmployeeRole>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
