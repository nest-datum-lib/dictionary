import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CategoryHttpTcpController } from './category-http-tcp.controller';

@Module({
	controllers: [ CategoryHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class CategoryHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
