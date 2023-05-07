import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { PostPostOptionService } from './post-post-option.service';
import { PostPostOptionTcpController } from './post-post-option-tcp.controller';
import { PostPostPostOption } from '../post-post-post-option/post-post-post-option.entity';
import { PostOption } from '../post-option/post-option.entity';
import { Post } from '../post/post.entity';
import { PostPostOption } from './post-post-option.entity';

@Module({
	controllers: [
		PostPostOptionTcpController, 
	],
	imports: [
		TypeOrmModule.forFeature([
			PostOption,
			PostPostOption,
			Post,
			PostPostPostOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		PostPostOptionService,
	],
})
export class PostPostOptionTcpModule {
}
