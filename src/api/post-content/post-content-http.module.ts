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
import { PostContentHttpController } from './post-content-http.controller';
import { PostContentService } from './post-content.service';
import { CategoryOption } from '../category-option/category-option.entity';
import { Category } from '../category/category.entity';
import { PostContent } from './post-content.entity';

@Module({
	controllers: [ PostContentHttpController ],
	imports: [
		TypeOrmModule.forFeature([
			CategoryOption,
			Category,
			PostContent,
		]),
		CacheModule,
	],
	providers: [
		CacheService,
		PostContentService, 
	],
})
export class PostContentHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
