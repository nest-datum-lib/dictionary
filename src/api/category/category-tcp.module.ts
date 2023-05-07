import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { CategoryService } from './category.service';
import { CategoryTcpController } from './category-tcp.controller';
import { Post } from '../post/post.entity';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from '../category-option/category-option.entity';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { Category } from './category.entity';

@Module({
	controllers: [ CategoryTcpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Post,
			CategoryOption,
			CategoryCategoryOption,
			Category,
			CategoryCategoryCategoryOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		CategoryService,
	],
})
export class CategoryTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
