import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from './category-option.entity';

@Injectable()
export class CategoryOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';
	protected readonly optionContentColumnName: string = 'categoryCategoryOptionId';
	protected readonly repositoryConstructor = CategoryOption;
	protected readonly repositoryOptionConstructor = CategoryCategoryOption;
	protected readonly repositoryContentOptionConstructor = CategoryCategoryCategoryOption;

	constructor(
		@InjectRepository(CategoryOption) protected readonly repository: Repository<CategoryOption>,
		@InjectRepository(CategoryCategoryOption) public readonly repositoryOption: Repository<CategoryCategoryOption>,
		@InjectRepository(CategoryCategoryCategoryOption) public readonly repositoryContentOption: Repository<CategoryCategoryCategoryOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
