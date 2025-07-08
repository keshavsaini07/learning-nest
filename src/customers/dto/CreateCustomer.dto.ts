/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsNotEmptyObject()
  address: CreateAddressDto;
}

// A schema of how the request body is gonna look like
// A dto will not actually look like your model
