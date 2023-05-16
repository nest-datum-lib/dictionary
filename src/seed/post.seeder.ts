import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Post } from '../api/post/post.entity';
import { skillsData } from './data/skills';
import { degreeData } from './data/degree';
import { licensesData } from './data/licenses';
import { schoolData } from './data/school';
import { languagesData } from './data/languages';

export class PostSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Post) private readonly postRepository: Repository<Post>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([
                ...skillsData,
                ...degreeData,
                ...licensesData,
                ...schoolData,
                ...languagesData
            ], async (data) => {
				try {
					await this.postRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Post 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Post 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}