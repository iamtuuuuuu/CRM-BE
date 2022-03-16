import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsUpdateInput } from './sysdiagrams-update.input';
import { sysdiagramsWhereUniqueInput } from './sysdiagrams-where-unique.input';

@ArgsType()
export class UpdateOnesysdiagramsArgs {

    @Field(() => sysdiagramsUpdateInput, {nullable:false})
    data!: sysdiagramsUpdateInput;

    @Field(() => sysdiagramsWhereUniqueInput, {nullable:false})
    where!: sysdiagramsWhereUniqueInput;
}
