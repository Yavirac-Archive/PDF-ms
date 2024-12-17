import { Module } from '@nestjs/common';
import { PdfModule } from './pdf/pdf.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [
    PdfModule,
    MulterModule.register({
      dest: './uploads', // Carpeta temporal donde se guardan los archivos
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Sirve archivos estáticos desde la carpeta uploads
      serveRoot: '/uploads/', // URL donde estarán accesibles
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
