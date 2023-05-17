import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Category } from '../api/category/category.entity';

export class CategorySeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "dictionary-cat-skills",
				userId: process.env.USER_ID,
                categoryStatusId: "dictionary-cat-status-active",
                name: 'Skills',
                description: 'Job skills.',
				isNotDelete: 1,
			}, {
				id: "dictionary-cated-degree",
				userId: process.env.USER_ID,
                categoryStatusId: "dictionary-cat-status-active",
                name: 'Education Degree',
                description: 'Education Degree',
				isNotDelete: 1,
			}, {
				id: "dictionary-cat-licenses",
				userId: process.env.USER_ID,
                categoryStatusId: "dictionary-cat-status-active",
                name: 'Licenses',
                description: 'Licenses.',
				isNotDelete: 1,
			}, {
				id: "dictionary-cat-school",
				userId: process.env.USER_ID,
                categoryStatusId: "dictionary-cat-status-active",
                name: 'School',
                description: 'School.',
				isNotDelete: 1,
			}, {
				id: "dictionary-cat-languages",
				userId: process.env.USER_ID,
                categoryStatusId: "dictionary-cat-status-active",
                name: 'Languages',
                description: 'Languages.',
				isNotDelete: 1,
			}, {
                id: "dictionary-cat-ed-asd",
                userId: "happ-sso-user-admin",
                categoryStatusId: "dictionary-cat-status-active",
                name: "Associate's Degree",
                description: "Associate's Degree.",
                isNotDelete: 1
            }, {
                id: "dictionary-cat-ed-bachd",
                userId: "happ-sso-user-admin",
                categoryStatusId: "dictionary-cat-status-active",
                name: "Bachelor's degree",
                description: "Bachelor's degree",
                isNotDelete: 1
            }, {
                id: "dictionary-cat-ed-masd",
                userId: "happ-sso-user-admin",
                categoryStatusId: "dictionary-cat-status-active",
                name: "Master's degree",
                description: "Master's degree.",
                isNotDelete: 1
            }, {
                id: "dictionary-cat-ed-docd",
                userId: "happ-sso-user-admin",
                categoryStatusId: "dictionary-cat-status-active",
                name: "Doctoral Degree",
                description: "Doctoral Degree.",
                isNotDelete: 1
            }], async (data) => {
				try {
					await this.categoryRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Category 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Category 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}