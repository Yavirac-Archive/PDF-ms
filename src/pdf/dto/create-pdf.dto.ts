import { IsNotEmpty, IsString } from 'class-validator';

export class UploadFileDto {
  @IsString()
  @IsNotEmpty()
  filename: string;

  @IsString()
  @IsNotEmpty()
  filePath: string;

  
  @IsString()
  @IsNotEmpty()
  fileUrl: string;
}
