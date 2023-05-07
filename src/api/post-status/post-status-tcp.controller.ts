import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { PostStatusService } from './post-status.service';

@Controller()
export class PostStatusTcpController extends StatusTcpController {
	constructor(
		protected service: PostStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'postStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'postStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('postStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('postStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('postStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('postStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
