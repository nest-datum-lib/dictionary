import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { AccessToken } from '@nest-datum-common/decorators';
import { 
	exists as utilsCheckExists,
	strIdExists as utilsCheckStrIdExists, 
} from '@nest-datum-utils/check';
import { BindTcpController } from '@nest-datum/bind';
import { PostContentService } from './post-content.service';

@Controller()
export class PostContentTcpController extends BindTcpController {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';
	
	constructor(
		protected service: PostContentService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckExists(options['value'])) {
			throw new MethodNotAllowedException(`Property "value" is not valid.`);
		}
		return {
			...await super.validateCreate(options),
			value: options['value'] ?? '',
		};
	}

	async validateUpdate(options) {
		if (!utilsCheckExists(options['value'])) {
			throw new MethodNotAllowedException(`Property "value" is not valid.`);
		}
		if (!utilsCheckStrIdExists(options['categoryOptionId'])) {
			throw new MethodNotAllowedException(`Property "categoryOptionId" is not valid.`);
		}
		if (!utilsCheckStrIdExists(options['postId'])) {
			throw new MethodNotAllowedException(`Property "postId" is not valid.`);
		}
		return {
			...await super.validateUpdate(options),
			categoryOptionId: options['categoryOptionId'],
			postId: options['postId'],
			value: options['value'] ?? '',
		};
	}

	@MessagePattern({ cmd: 'postContent.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'postContent.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('postContent.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('postContent.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('postContent.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('postContent.update')
	async update(payload) {
		return await super.create(payload);
	}
}
