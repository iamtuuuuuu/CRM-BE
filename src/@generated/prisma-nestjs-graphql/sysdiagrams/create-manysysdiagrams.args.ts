import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsCreateManyInput } from './sysdiagrams-create-many.input';

@ArgsType()
export class CreateManysysdiagramsArgs {

    @Field(() => [sysdiagramsCreateManyInput], {nullable:false})
    data!: Array<sysdiagramsCreateManyInput>;
}
