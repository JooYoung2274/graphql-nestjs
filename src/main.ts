import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Hot reload 추가
declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // cors 추가
    if (process.env.NODE_ENV === 'production') {
        app.enableCors({
            origin: ['https://'],
            credentials: true,
        });
    } else {
        app.enableCors({
            origin: true,
            credentials: true,
        });
    }

    await app.listen(3000);

    // Hot reload
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
