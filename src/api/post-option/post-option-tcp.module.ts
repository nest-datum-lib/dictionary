import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { PostOptionService } from './post-option.service';
import { PostOptionTcpController } from './post-option-tcp.controller';
import { PostPostPostOption } from '../post-post-post-option/post-post-post-option.entity';
import { PostPostOption } from '../post-post-option/post-post-option.entity';
import { Post } from '../post/post.entity';
import { PostOption } from './post-option.entity';

@Module({
	controllers: [
		PostOptionTcpController, 
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
		PostOptionService,
	],
})
export class PostOptionTcpModule {
}
