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
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import { CategoryService } from './category.service';

@Controller()
export class CategoryTcpController extends TcpController {
	constructor(
		protected service: CategoryService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['categoryStatusId'])) {
			throw new MethodNotAllowedException(`Property "categoryStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
		}
		if (utilsCheckStrFilled(options['categoryStatusId'])) {
			if (!utilsCheckStrId(options['categoryStatusId'])) {
				throw new MethodNotAllowedException(`Property "categoryStatusId" is not valid.`);
			}
			output['categoryStatusId'] = options['categoryStatusId'];
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

	@MessagePattern({ cmd: 'category.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'category.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('category.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('category.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('category.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('category.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
