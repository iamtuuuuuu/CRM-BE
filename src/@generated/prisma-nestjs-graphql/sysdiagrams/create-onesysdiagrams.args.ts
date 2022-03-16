import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsCreateInput } from './sysdiagrams-create.input';

@ArgsType()
export class CreateOnesysdiagramsArgs {

    @Field(() => sysdiagramsCreateInput, {nullable:false})
    data!: sysdiagramsCreateInput;
}
