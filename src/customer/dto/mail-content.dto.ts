import { IsString } from 'class-validator';

export class MailContentDto {
  @IsString()
  content: string;
}
