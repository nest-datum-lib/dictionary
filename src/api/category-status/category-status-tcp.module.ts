import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CategoryStatusService } from './category-status.service';
import { CategoryStatusTcpController } from './category-status-tcp.controller';
import { CategoryStatus } from './category-status.entity';

@Module({
	controllers: [ CategoryStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ CategoryStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		CategoryStatusService, 
	],
})
export class CategoryStatusTcpModule {
}

