import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DICTIONARY}/form/field`)
export class FormFieldHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_DICTIONARY;
	protected readonly entityName: string = 'formField';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
