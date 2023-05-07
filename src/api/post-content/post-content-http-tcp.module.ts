import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { PostContentHttpTcpController } from './post-content-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ PostContentHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class PostContentHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
