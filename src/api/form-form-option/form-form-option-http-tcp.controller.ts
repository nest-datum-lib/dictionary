import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DICTIONARY}/form/option`)
export class FormFormOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_DICTIONARY;
	protected readonly entityName: string = 'formOptionRelation';
	protected readonly mainRelationColumnName: string = 'formId';
	protected readonly optionRelationColumnName: string = 'formOptionId';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
