import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { CategoryStatusService } from './category-status.service';

@Controller()
export class CategoryStatusTcpController extends StatusTcpController {
	constructor(
		protected service: CategoryStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'categoryStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'categoryStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('categoryStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('categoryStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('categoryStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('categoryStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
