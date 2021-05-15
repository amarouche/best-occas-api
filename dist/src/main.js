"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true, bodyParser: true });
    app.setGlobalPrefix('api');
    const opt = new swagger_1.DocumentBuilder().setTitle('api').setDescription('descri').addTag('1.0').build();
    const doc = swagger_1.SwaggerModule.createDocument(app, opt);
    swagger_1.SwaggerModule.setup('docs', app, doc);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map