import { 
	Post,
	Patch,
	Body,
	Param,
} from '@nestjs/common';
import { MethodNotAllowedException } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AccessToken } from '@nest-datum-common/decorators';
import { BindHttpController } from '@nest-datum/bind';
import { 
	exists as utilsCheckExists,
	strIdExists as utilsCheckStrIdExists, 
} from '@nest-datum-utils/check';
import { PostContentService } from './post-content.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/post/content`)
export class PostContentHttpController extends BindHttpController {
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
		if (!utilsCheckStrIdExists(options['postId'])) {
			throw new MethodNotAllowedException(`Property "postId" is not valid.`);
		}
		if (!utilsCheckStrIdExists(options['categoryOptionId'])) {
			throw new MethodNotAllowedException(`Property "categoryOptionId" is not valid.`);
		}
		return {
			...await super.validateUpdate(options),
			postId: options['postId'],
			categoryOptionId: options['categoryOptionId'],
			value: options['value'] ?? '',
		};
	}

	@Post(':id')
	async create(
		@AccessToken() accessToken: string,
		@Param('id') entityId: string,
		@Body() body,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			value: body['value'],
			[this.mainRelationColumnName]: entityId,
			[this.optionRelationColumnName]: body['categoryOptionId'],
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body() body,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.update(await this.validateUpdate({
			accessToken,
			id,
			value: body['value'],
			postId: body['postId'],
			categoryOptionId: body['categoryOptionId'],
		})));
	}
}
