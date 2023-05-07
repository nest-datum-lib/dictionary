import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { CategoryCategoryOptionHttpTcpController } from './category-category-option-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ CategoryCategoryOptionHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class CategoryCategoryOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
