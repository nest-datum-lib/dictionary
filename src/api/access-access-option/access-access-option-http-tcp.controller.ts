import { Controller } from '@nestjs/common';
import { AccessAccessOptionHttpTcpController as AccessAccessOptionHttpTcpControllerBase } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DICTIONARY}/access/option`)
export class AccessAccessOptionHttpTcpController extends AccessAccessOptionHttpTcpControllerBase {
	protected readonly serviceName: string = process.env.SERVICE_DICTIONARY;

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
