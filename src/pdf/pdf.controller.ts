import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { UploadFileDto } from './dto/create-pdf.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('pdfs')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @MessagePattern({ cmd: 'process_pdf' })
  async processPdf(@Payload() uploadFileDto: UploadFileDto) {
    return this.pdfService.process(uploadFileDto);
  }

  @MessagePattern({ cmd: 'get_all_pdfs' })
  async getAllPdfs() {
    return this.pdfService.getAllPdfs();
  }

  @MessagePattern({ cmd: 'get_pdf_by_id' })
  async getPdfById(@Payload() id: string) {
    return this.pdfService.getPdfById(id);
  }
}
