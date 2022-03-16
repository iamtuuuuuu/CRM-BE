import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsWhereInput } from './sysdiagrams-where.input';

@ArgsType()
export class DeleteManysysdiagramsArgs {

    @Field(() => sysdiagramsWhereInput, {nullable:true})
    where?: sysdiagramsWhereInput;
}
