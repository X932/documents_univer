import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  RmqOptions,
  Transport,
} from '@nestjs/microservices';
import { ServicesConfigs } from 'types-univer';
import { AppModule } from './app.module';

const microserviceOptions: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [ServicesConfigs.DocumentOptions.url],
    queue: ServicesConfigs.DocumentOptions.queue,
    queueOptions: {
      durable: false,
    },
  },
};

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceOptions,
  );
  await app.listen();

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
