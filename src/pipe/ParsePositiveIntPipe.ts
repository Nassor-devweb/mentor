import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform {
  transform(value: any) {
    const intValue = parseInt(value, 10);
    if (isNaN(intValue) || intValue < 1) {
      throw new BadRequestException('Le paramètre doit être un nombre entier supérieur ou égal à 1');
    }
    return intValue;
  }
}
