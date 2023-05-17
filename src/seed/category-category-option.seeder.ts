import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { CategoryCategoryOption } from '../api/category-category-option/category-category-option.entity';
import { v4 as uuidv4 } from 'uuid';

export class CategoryCategoryOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(CategoryCategoryOption) private readonly categoryCategoryOptionRepository: Repository<CategoryCategoryOption>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: uuidv4(),
				categoryOptionId: "dictionary-cat-op-edu",
                categoryId: "dictionary-cat-school"
			},{
				id: uuidv4(),
				categoryOptionId: "dictionary-cat-op-edu",
                categoryId: "dictionary-cat-ed-asd"
			},{
				id: uuidv4(),
				categoryOptionId: "dictionary-cat-op-edu",
                categoryId: "dictionary-cat-ed-bachd"
			},{
				id: uuidv4(),
				categoryOptionId: "dictionary-cat-op-edu",
                categoryId: "dictionary-cat-ed-masd"
			},{
				id: uuidv4(),
				categoryOptionId: "dictionary-cat-op-edu",
                categoryId: "dictionary-cat-ed-docd"
			}], async (data) => {
				try {
					await this.categoryCategoryOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: CategoryCategoryOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: CategoryCategoryOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}