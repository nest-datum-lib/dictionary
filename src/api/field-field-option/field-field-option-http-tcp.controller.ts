import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DICTIONARY}/field/option`)
export class FieldFieldOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_DICTIONARY;
	protected readonly entityName: string = 'fieldOptionRelation';
	protected readonly mainRelationColumnName: string = 'fieldId';
	protected readonly optionRelationColumnName: string = 'fieldOptionId';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
