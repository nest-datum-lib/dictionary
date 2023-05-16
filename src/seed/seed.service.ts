import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';

import { PostStatusSeeder } from './post-status.seeder';
import { CategoryStatusSeeder } from './category-status.seeder';
import { PostSeeder } from './post.seeder';
import { CategorySeeder } from './category.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly connection: Connection,
		private readonly postStatus: PostStatusSeeder,
		private readonly categoryStatus: CategoryStatusSeeder,
		private readonly category: CategorySeeder,
		private readonly post: PostSeeder,
	) {
		this.seeders = [
			this.postStatus,
			this.categoryStatus,
			this.category,
			this.post,
		];
	}

	async send() {
		try {
			await Bluebird.each(this.seeders, async (seeder) => {
				this.logger.log(`Seeding ${seeder.constructor.name}`);
				
				await seeder.send();
			});
		}
		catch (err) {
			console.error(`ERROR send: ${err.message}`);
		}
	}
}
