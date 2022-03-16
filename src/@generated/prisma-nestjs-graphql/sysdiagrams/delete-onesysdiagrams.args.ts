import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsWhereUniqueInput } from './sysdiagrams-where-unique.input';

@ArgsType()
export class DeleteOnesysdiagramsArgs {

    @Field(() => sysdiagramsWhereUniqueInput, {nullable:false})
    where!: sysdiagramsWhereUniqueInput;
}
