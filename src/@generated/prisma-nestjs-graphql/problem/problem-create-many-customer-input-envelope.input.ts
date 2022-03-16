import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateManyCustomerInput } from './problem-create-many-customer.input';

@InputType()
export class ProblemCreateManyCustomerInputEnvelope {

    @Field(() => [ProblemCreateManyCustomerInput], {nullable:false})
    data!: Array<ProblemCreateManyCustomerInput>;
}
