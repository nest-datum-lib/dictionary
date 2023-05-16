import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlConfig as utilsFormatSqlConfig } from '@nest-datum-utils/format';

import { SeedService } from './seed.service';
import { PostStatusSeeder } from './post-status.seeder';
import { CategoryStatusSeeder } from './category-status.seeder';
import { PostSeeder } from './post.seeder';
import { CategorySeeder } from './category.seeder';

import { PostStatus } from '../api/post-status/post-status.entity';
import { CategoryStatus } from '../api/category-status/category-status.entity';
import { Post } from '../api/post/post.entity';
import { Category } from '../api/category/category.entity';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(utilsFormatSqlConfig()),
		TypeOrmModule.forFeature([
			PostStatus,
			CategoryStatus,
			Post,
			Category,
		]),
	],
	providers: [
		SeedService,
		PostStatusSeeder,
		CategoryStatusSeeder,
		PostSeeder,
		CategorySeeder
	]
})

export class SeedModule {
}
