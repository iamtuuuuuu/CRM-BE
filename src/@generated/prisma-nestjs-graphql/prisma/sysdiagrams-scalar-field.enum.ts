import { registerEnumType } from '@nestjs/graphql';

export enum SysdiagramsScalarFieldEnum {
    name = "name",
    principal_id = "principal_id",
    diagram_id = "diagram_id",
    version = "version",
    definition = "definition"
}


registerEnumType(SysdiagramsScalarFieldEnum, { name: 'SysdiagramsScalarFieldEnum', description: undefined })
