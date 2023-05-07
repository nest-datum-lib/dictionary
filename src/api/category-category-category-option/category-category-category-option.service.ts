import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { CategoryCategoryCategoryOption } from './category-category-category-option.entity';

@Injectable()
export class CategoryCategoryCategoryOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryCategoryOptionId';
	protected readonly repositoryConstructor = CategoryCategoryCategoryOption;

	constructor(
		@InjectRepository(CategoryCategoryCategoryOption) protected readonly repository: Repository<CategoryCategoryCategoryOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
