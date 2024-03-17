import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    // Opcional: Configurar otras opciones de CORS según tus necesidades
    // Por ejemplo:
    // methods: ['GET', 'POST'], // Métodos HTTP permitidos
    // allowedHeaders: ['Authorization'], // Cabeceras permitidas
    // exposedHeaders: ['Authorization'], // Cabeceras expuestas al cliente
    // ...
  });
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}`)
}
bootstrap();
