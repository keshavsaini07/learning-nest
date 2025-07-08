/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  Line1: string;

  Line2: string;

  @IsNotEmpty()
  Zip: string;

  @IsNotEmpty()
  City: string;

  @IsNotEmpty()
  state: string;
}
