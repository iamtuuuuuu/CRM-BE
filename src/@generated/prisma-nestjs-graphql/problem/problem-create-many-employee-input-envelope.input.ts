import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateManyEmployeeInput } from './problem-create-many-employee.input';

@InputType()
export class ProblemCreateManyEmployeeInputEnvelope {

    @Field(() => [ProblemCreateManyEmployeeInput], {nullable:false})
    data!: Array<ProblemCreateManyEmployeeInput>;
}
