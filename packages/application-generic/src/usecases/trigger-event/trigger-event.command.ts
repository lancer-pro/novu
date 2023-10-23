import {
  IsDefined,
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import {
  AddressingTypeEnum,
  ISubscribersDefine,
  ITenantDefine,
} from '@novu/shared';

import { EnvironmentWithUserCommand } from '../../commands';

export class TriggerEventCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  @IsString()
  identifier: string;

  @IsDefined()
  payload: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  @IsDefined()
  overrides: Record<string, Record<string, unknown>>;

  @IsOptional()
  to?: ISubscribersDefine[];

  @IsString()
  @IsDefined()
  transactionId: string;

  @IsOptional()
  @ValidateNested()
  actor?: ISubscribersDefine | null;

  @IsOptional()
  @ValidateNested()
  tenant?: ITenantDefine | null;

  @IsOptional()
  addressingType?: AddressingTypeEnum;
}
