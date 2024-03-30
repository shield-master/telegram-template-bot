import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

class Main {
	constructor() {}
	async init() {
		const app = await NestFactory.create(AppModule);
  	await app.listen(8573);
	}
}

const bot = new Main()
bot.init()