import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { CategoryOptionService } from './category-option.service';

@Controller()
export class CategoryOptionTcpController extends OptionTcpController {
	constructor(
		protected service: CategoryOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'categoryOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'categoryOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('categoryOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('categoryOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('categoryOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('categoryOption.update')
	async update(payload) {
		return await super.update(payload);
	}

	@EventPattern('category.content')
	async content(payload) {
		return await super.content(payload);
	}

	@EventPattern('category.contentUpdate')
	async contentUpdate(payload) {
		return await super.contentUpdate(payload);
	}
}
