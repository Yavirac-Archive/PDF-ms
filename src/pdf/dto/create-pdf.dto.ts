import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
export class CreatePdfDto {

    

    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    filePath: string;
  
    @IsOptional()
    createdAt?: Date; 
  
    @IsOptional()
    updatedAt?: Date; 
  
    @IsOptional()
    @IsBoolean()
    delete?: boolean; 
}
