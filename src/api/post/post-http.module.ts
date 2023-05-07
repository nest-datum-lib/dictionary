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
import { PostService } from './post.service';
import { PostHttpController } from './post-http.controller';
import { Category } from '../category/category.entity';
import { PostPostOptionService } from '../post-post-option/post-post-option.service';
import { PostPostPostOptionService } from '../post-post-post-option/post-post-post-option.service';
import { PostPostPostOption } from '../post-post-post-option/post-post-post-option.entity';
import { PostOption } from '../post-option/post-option.entity';
import { PostPostOption } from '../post-post-option/post-post-option.entity';
import { Post } from './post.entity';

@Module({
	controllers: [ PostHttpController ],
	imports: [
		TypeOrmModule.forFeature([
			Category, 
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
		PostPostPostOptionService,
		PostService,
	],
})
export class PostHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
