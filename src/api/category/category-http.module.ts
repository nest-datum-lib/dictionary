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
import { CategoryService } from './category.service';
import { CategoryHttpController } from './category-http.controller';
import { Post } from '../post/post.entity';
import { CategoryCategoryOptionService } from '../category-category-option/category-category-option.service';
import { CategoryCategoryCategoryOptionService } from '../category-category-category-option/category-category-category-option.service';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from '../category-option/category-option.entity';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { Category } from './category.entity';

@Module({
	controllers: [ CategoryHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Post,
			CategoryOption,
			CategoryCategoryOption,
			Category,
			CategoryCategoryCategoryOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CategoryCategoryOptionService,
		CategoryCategoryCategoryOptionService,
		CategoryService,
	],
})
export class CategoryHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
