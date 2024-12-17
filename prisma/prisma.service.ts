import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }

  onModuleInit() {
    this.$connect();  // Conectar automáticamente a la base de datos cuando el módulo se inicializa
  }

  onModuleDestroy() {
    this.$disconnect();  // Desconectar de la base de datos cuando el módulo se destruya
  }
}