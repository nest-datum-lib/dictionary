import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CategoryStatusService } from './category-status.service';
import { CategoryStatusHttpController } from './category-status-http.controller';
import { CategoryStatus } from './category-status.entity';

@Module({
	controllers: [ CategoryStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ CategoryStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CategoryStatusService, 
	],
})
export class CategoryStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
