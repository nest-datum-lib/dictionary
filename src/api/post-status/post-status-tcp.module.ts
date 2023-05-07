import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { PostStatusService } from './post-status.service';
import { PostStatusTcpController } from './post-status-tcp.controller';
import { PostStatus } from './post-status.entity';

@Module({
	controllers: [ PostStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ PostStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		PostStatusService, 
	],
})
export class PostStatusTcpModule {
}

