import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { CategoryStatusService } from './category-status.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/category-status`)
export class CategoryStatusHttpController extends StatusHttpController {
	constructor(
		protected service: CategoryStatusService,
	) {
		super();
	}
}
