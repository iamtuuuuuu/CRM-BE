import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsUpdateManyMutationInput } from './sysdiagrams-update-many-mutation.input';
import { sysdiagramsWhereInput } from './sysdiagrams-where.input';

@ArgsType()
export class UpdateManysysdiagramsArgs {

    @Field(() => sysdiagramsUpdateManyMutationInput, {nullable:false})
    data!: sysdiagramsUpdateManyMutationInput;

    @Field(() => sysdiagramsWhereInput, {nullable:true})
    where?: sysdiagramsWhereInput;
}
