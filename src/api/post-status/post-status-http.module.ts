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
import { PostStatusService } from './post-status.service';
import { PostStatusHttpController } from './post-status-http.controller';
import { PostStatus } from './post-status.entity';

@Module({
	controllers: [ PostStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ PostStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		PostStatusService, 
	],
})
export class PostStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
