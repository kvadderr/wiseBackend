import { PartialType } from '@nestjs/mapped-types';
import { CreateReceipDto } from './create-receip.dto';

export class UpdateReceipDto extends PartialType(CreateReceipDto) {}
