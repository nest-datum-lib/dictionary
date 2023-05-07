import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { BindTcpController } from '@nest-datum/bind';
import { CategoryCategoryOptionService } from './category-category-option.service';

@Controller()
export class CategoryCategoryOptionTcpController extends BindTcpController {
	protected readonly mainRelationColumnName: string = 'categoryId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';
	
	constructor(
		protected service: CategoryCategoryOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'categoryOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'categoryOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('categoryOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('categoryOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('categoryOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
