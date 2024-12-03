import { HttpStatus, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { PrismaClient } from '@prisma/client';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class PdfService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }

  create(createPdfDto: CreatePdfDto) {
    return this.pdf.create({
      data: createPdfDto
    });
  }

  findAll() {
    return this.pdf.findMany({});
  }

  async findOne(id: number) {

    const pdf = await this.pdf.findFirst({
      where: { id, available: true }
    });

    if (!pdf) {
      throw new RpcException({
        message: 'pdf with id #${ id } not found',
        status: HttpStatus.BAD_REQUEST
      });
    }
    return pdf;
  }

  async update(id: number, updatePdfDto: UpdatePdfDto) {

    const { id: __, ...data } = updatePdfDto;

    await this.findOne(id);

    return this.pdf.update({

      where: { id },
      data: data
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    const pdf = await this.pdf.update({
      where: { id },
      data: {
        available: false,
      }
    })
    return pdf
  }
}

