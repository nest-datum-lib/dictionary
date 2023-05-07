import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { TcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	numeric as utilsCheckNumeric,
} from '@nest-datum-utils/check';
import { PostService } from './post.service';

@Controller()
export class PostTcpController extends TcpController {
	constructor(
		protected service: PostService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['postStatusId'])) {
			throw new MethodNotAllowedException(`Property "postStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['categoryId'])) {
			throw new MethodNotAllowedException(`Property "categoryId" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['postStatusId'])) {
			if (!utilsCheckStrId(options['postStatusId'])) {
				throw new MethodNotAllowedException(`Property "postStatusId" is not valid.`);
			}
			output['postStatusId'] = options['postStatusId'];
		}
		if (utilsCheckExists(options['categoryId'])) {
			if (!utilsCheckStrId(options['categoryId'])) {
				throw new MethodNotAllowedException(`Property "categoryId" is not valid.`);
			}
			output['categoryId'] = options['categoryId'];
		}
		if (utilsCheckExists(options['name'])) {
			if (!utilsCheckStrName(options['name'])) {
				throw new MethodNotAllowedException(`Property "name" is not valid.`);
			}
			output['name'] = options['name'];
		}
		if (utilsCheckExists(options['description'])) {
			if (!utilsCheckStrDescription(options['description'])) {
				throw new MethodNotAllowedException(`Property "description" is not valid.`);
			}
			output['description'] = options['description'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@MessagePattern({ cmd: 'post.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'post.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('post.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('post.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('post.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('post.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
