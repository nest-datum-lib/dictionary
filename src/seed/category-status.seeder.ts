import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { CategoryStatus } from '../api/category-status/category-status.entity';

export class CategoryStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(CategoryStatus) private readonly categoryStatusRepository: Repository<CategoryStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "dictionary-cat-status-active",
				userId: process.env.USER_ID,
                envKey: "HAPP_DICTIONARY_CATEGORY_STATUS_ACTIVE",
                name: 'Active',
                description: 'Category is active.',
				isNotDelete: 1,
			}], async (data) => {
				try {
					await this.categoryStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: CategoryStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: CategoryStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}