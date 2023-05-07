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
import { CategoryCategoryOptionService } from './category-category-option.service';
import { CategoryCategoryOptionHttpController } from './category-category-option-http.controller';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from '../category-option/category-option.entity';
import { Category } from '../category/category.entity';
import { CategoryCategoryOption } from './category-category-option.entity';

@Module({
	controllers: [ CategoryCategoryOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
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
	],
})
export class CategoryCategoryOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
