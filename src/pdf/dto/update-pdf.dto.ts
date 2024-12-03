import { PartialType } from '@nestjs/mapped-types';
import { CreatePdfDto } from './create-pdf.dto';
import { IsString, IsOptional, IsBoolean, IsNumber, IsPositive } from 'class-validator';

export class UpdatePdfDto extends PartialType(CreatePdfDto) {

    @IsNumber()
    @IsPositive()
    id:number;

    @IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    filePath?: string;
  
    @IsBoolean()
    @IsOptional()
    delete?: boolean;
}
