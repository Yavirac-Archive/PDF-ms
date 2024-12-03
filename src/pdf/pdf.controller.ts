import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { PaginationDto } from 'src/common/dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  //@Post()
  @MessagePattern({ cmd: 'create_pdf' })
  create(@Payload() createPdfDto: CreatePdfDto) {
    return this.pdfService.create(createPdfDto);
  }

  //@Get()
  @MessagePattern({ cmd: 'get_all_pdf' })
  findAll(@Payload() paginationDto:PaginationDto) {
    return this.pdfService.findAll();
  }

  //@Get(':id')
  @MessagePattern({ cmd: 'get_one_pdf' })
  findOne(@Payload('id') id: string) {
    return this.pdfService.findOne(+id);
  }

  //@Patch(':id')
  @MessagePattern({ cmd: 'update_pdf' })
  update(@Payload() updatePdfDto: UpdatePdfDto) {
    return this.pdfService.update(updatePdfDto.id,updatePdfDto);
  }

  //@Delete(':id')
  @MessagePattern({ cmd: 'delete_pdf' })
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.pdfService.remove(id);
  }
}
