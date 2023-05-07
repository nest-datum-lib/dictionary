import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { PostHttpTcpController } from './post-http-tcp.controller';

@Module({
	controllers: [ PostHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class PostHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
