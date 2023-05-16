import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { PostStatus } from '../api/post-status/post-status.entity';

export class PostStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(PostStatus) private readonly postStatusRepository: Repository<PostStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "dictionary-post-status-active",
				userId: process.env.USER_ID,
                envKey: "HAPP_DICTIONARY_POST_STATUS_ACTIVE",
                name: 'Active',
                description: 'Post is active.',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.postStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: PostStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: PostStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}