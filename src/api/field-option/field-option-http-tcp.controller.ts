import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionHttpTcpController } from '@nest-datum/option';

@Controller(`${process.env.SERVICE_DICTIONARY}/field-option`)
export class FieldOptionHttpTcpController extends OptionHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_DICTIONARY;
	protected readonly entityName: string = 'fieldOption';
	
	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
