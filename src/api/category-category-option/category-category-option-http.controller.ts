import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { CategoryCategoryOptionService } from './category-category-option.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/category/option`)
export class CategoryCategoryOptionHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';
	
	constructor(
		protected service: CategoryCategoryOptionService,
	) {
		super();
	}
}
