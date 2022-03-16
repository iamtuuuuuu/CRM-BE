import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'sqlserver://localhost:1434;database=crm;username=sa;password=vuanhtu;trustServerCertificate=true',
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
    } catch (e) {
      console.log(e.message);
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
