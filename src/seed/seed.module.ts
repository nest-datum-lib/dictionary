import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlConfig as utilsFormatSqlConfig } from '@nest-datum-utils/format';

import { SeedService } from './seed.service';
import { PostStatusSeeder } from './post-status.seeder';
import { CategoryStatusSeeder } from './category-status.seeder';
import { CategoryOptionSeeder } from './category-option.seeder';
import { PostSeeder } from './post.seeder';
import { CategorySeeder } from './category.seeder';
import { CategoryCategoryOptionSeeder } from './category-category-option.seeder';

import { PostStatus } from '../api/post-status/post-status.entity';
import { CategoryStatus } from '../api/category-status/category-status.entity';
import { Post } from '../api/post/post.entity';
import { Category } from '../api/category/category.entity';
import { CategoryCategoryOption } from '../api/category-category-option/category-category-option.entity';
import { CategoryCategoryCategoryOption } from '../api/category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from '../api/category-option/category-option.entity';
import { PostContent } from 'src/api/post-content/post-content.entity';
import { PostPostOption } from 'src/api/post-post-option/post-post-option.entity';
import { PostOption } from 'src/api/post-option/post-option.entity';
import { PostPostPostOption } from 'src/api/post-post-post-option/post-post-post-option.entity';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(utilsFormatSqlConfig()),
		TypeOrmModule.forFeature([
			PostStatus,
			PostContent,
			PostPostOption,
			PostOption,
			PostPostPostOption,
			CategoryStatus,
			CategoryOption,
			CategoryCategoryOption,
			CategoryCategoryCategoryOption,
			Post,
			Category,
		]),
	],
	providers: [
		SeedService,
		PostStatusSeeder,
		CategoryStatusSeeder,
		CategoryOptionSeeder,
		PostSeeder,
		CategorySeeder,
		CategoryCategoryOptionSeeder
	]
})

export class SeedModule {
}
