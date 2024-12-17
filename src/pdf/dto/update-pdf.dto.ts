import { PartialType } from '@nestjs/mapped-types';
import { UploadFileDto } from './create-pdf.dto';
import { IsString, IsOptional, IsBoolean, IsNumber, IsPositive, IsUUID } from 'class-validator';

export class UpdatePdfDto extends PartialType(UploadFileDto) {

   
    @IsUUID()
    id:string;

    @IsString()
    @IsOptional()
    filePath?: string;
}
