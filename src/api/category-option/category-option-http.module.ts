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
import { CategoryOptionService } from './category-option.service';
import { CategoryOptionHttpController } from './category-option-http.controller';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { Category } from '../category/category.entity';
import { PostContent } from '../post-content/post-content.entity';
import { CategoryOption } from './category-option.entity';

@Module({
	controllers: [ CategoryOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			PostContent,
			CategoryOption,
			CategoryCategoryOption,
			Category,
			CategoryCategoryCategoryOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CategoryOptionService,
	],
})
export class CategoryOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
