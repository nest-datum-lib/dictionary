import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { CategoryCategoryOptionService } from './category-category-option.service';
import { CategoryCategoryOptionTcpController } from './category-category-option-tcp.controller';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from '../category-option/category-option.entity';
import { Category } from '../category/category.entity';
import { CategoryCategoryOption } from './category-category-option.entity';

@Module({
	controllers: [
		CategoryCategoryOptionTcpController, 
	],
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
export class CategoryCategoryOptionTcpModule {
}
