import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { CategoryStatus } from './category-status.entity';

@Injectable()
export class CategoryStatusService extends StatusService {
	protected readonly entityName: string = 'categoryStatus';
	protected readonly repositoryConstructor = CategoryStatus;

	constructor(
		@InjectRepository(CategoryStatus) protected readonly repository: Repository<CategoryStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
