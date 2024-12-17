import { HttpStatus, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { UploadFileDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { PrismaClient } from '@prisma/client';
import { RpcException } from '@nestjs/microservices';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PdfService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('CommentsService');
  onModuleInit() {
    this.$connect();
    this.logger.log('Data Base connected ')
  }

  constructor(private prisma: PrismaService) {
    super();
  }

  async process(uploadFileDto: UploadFileDto) {
    try {
      const savedPdf = await this.prisma.pdf.create({
        data: {
          filename: uploadFileDto.filename,
          filePath: uploadFileDto.filePath,
          fileUrl: uploadFileDto.fileUrl,
        },
      });

      return { message: 'Archivo procesado correctamente', data: savedPdf };
    } catch (error) {
      this.logger.error('Error guardando el PDF en la base de datos', error);
      throw new RpcException('No se pudo procesar el archivo PDF');
    }
  }

  async getAllPdfs() {
    try {
      const pdfs = await this.prisma.pdf.findMany({
        where: { delete: false },
      });

      return pdfs;
    } catch (error) {
      this.logger.error('Error al obtener los PDFs', error);
      throw new RpcException('No se pudo obtener los PDFs');
    }
  }

  async getPdfById(id: string) {
    try {
      const pdf = await this.prisma.pdf.findUnique({
        where: { id: id },
      });

      if (!pdf) {
        throw new RpcException(`PDF con ID ${id} no encontrado`);
      }

      return pdf;
    } catch (error) {
      this.logger.error('Error al obtener el PDF por ID', error);
      throw new RpcException('No se pudo obtener el archivo PDF');
    }
  }
}

