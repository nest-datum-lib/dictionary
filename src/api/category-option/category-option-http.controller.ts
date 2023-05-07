import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { CategoryOptionService } from './category-option.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/category-option`)
export class CategoryOptionHttpController extends OptionHttpController {
	constructor(
		protected service: CategoryOptionService,
	) {
		super();
	}
}
