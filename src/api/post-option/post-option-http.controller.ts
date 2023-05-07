import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { PostOptionService } from './post-option.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/post-option`)
export class PostOptionHttpController extends OptionHttpController {
	constructor(
		protected service: PostOptionService,
	) {
		super();
	}
}
