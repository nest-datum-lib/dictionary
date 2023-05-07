import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DICTIONARY}/post-status`)
export class PostStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_DICTIONARY;
	protected readonly entityName: string = 'postStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
