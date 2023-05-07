import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { PostPostOptionService } from './post-post-option.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/post/option`)
export class PostPostOptionHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postOptionId';
	
	constructor(
		protected service: PostPostOptionService,
	) {
		super();
	}
}
