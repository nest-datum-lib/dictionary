import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { CategoryCategoryOption } from './category-category-option.entity';


export class CategoryCategoryOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';
	protected repositoryConstructor = CategoryCategoryOption;
	
	constructor(
		@InjectRepository(CategoryCategoryOption) protected repository: Repository<CategoryCategoryOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
