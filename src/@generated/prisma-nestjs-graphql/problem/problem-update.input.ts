import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CustomerUpdateOneRequiredWithoutProblemInput } from '../customer/customer-update-one-required-without-problem.input';
import { EmployeeUpdateOneRequiredWithoutProblemInput } from '../employee/employee-update-one-required-without-problem.input';

@InputType()
export class ProblemUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CustomerUpdateOneRequiredWithoutProblemInput, {nullable:true})
    customer?: CustomerUpdateOneRequiredWithoutProblemInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutProblemInput, {nullable:true})
    employee?: EmployeeUpdateOneRequiredWithoutProblemInput;
}
