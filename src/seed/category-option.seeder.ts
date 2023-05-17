import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { CategoryOption } from '../api/category-option/category-option.entity';

export class CategoryOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(CategoryOption) private readonly categoryOptionRepository: Repository<CategoryOption>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "dictionary-cat-op-edu",
				userId: process.env.USER_ID,
                dataTypeId: "happ-data-type-text",
                envKey: "HAPP_DICTIONARY_CATEGORY_OPTION_EDUCATION",
                name: 'Education',
                description: 'Education.',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.categoryOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: CategoryOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: CategoryOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}