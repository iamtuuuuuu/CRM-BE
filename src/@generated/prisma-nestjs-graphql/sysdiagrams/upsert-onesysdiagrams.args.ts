import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsWhereUniqueInput } from './sysdiagrams-where-unique.input';
import { sysdiagramsCreateInput } from './sysdiagrams-create.input';
import { sysdiagramsUpdateInput } from './sysdiagrams-update.input';

@ArgsType()
export class UpsertOnesysdiagramsArgs {

    @Field(() => sysdiagramsWhereUniqueInput, {nullable:false})
    where!: sysdiagramsWhereUniqueInput;

    @Field(() => sysdiagramsCreateInput, {nullable:false})
    create!: sysdiagramsCreateInput;

    @Field(() => sysdiagramsUpdateInput, {nullable:false})
    update!: sysdiagramsUpdateInput;
}
