import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { BindTcpController } from '@nest-datum/bind';
import { PostPostOptionService } from './post-post-option.service';

@Controller()
export class PostPostOptionTcpController extends BindTcpController {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postOptionId';
	
	constructor(
		protected service: PostPostOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'postOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'postOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('postOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('postOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('postOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
