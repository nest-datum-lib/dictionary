import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { FormStatusService } from './form-status.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/form-status`)
export class FormStatusHttpController extends StatusHttpController {
	constructor(
		protected service: FormStatusService,
	) {
		super();
	}
}
