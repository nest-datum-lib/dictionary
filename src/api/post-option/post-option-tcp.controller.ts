import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { PostOptionService } from './post-option.service';

@Controller()
export class PostOptionTcpController extends OptionTcpController {
	constructor(
		protected service: PostOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'postOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'postOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('postOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('postOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('postOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('postOption.update')
	async update(payload) {
		return await super.update(payload);
	}

	@EventPattern('post.content')
	async content(payload) {
		return await super.content(payload);
	}

	@EventPattern('post.contentUpdate')
	async contentUpdate(payload) {
		return await super.contentUpdate(payload);
	}
}
