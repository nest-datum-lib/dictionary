import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { PostStatus } from './post-status.entity';

@Injectable()
export class PostStatusService extends StatusService {
	protected readonly entityName: string = 'postStatus';
	protected readonly repositoryConstructor = PostStatus;

	constructor(
		@InjectRepository(PostStatus) protected readonly repository: Repository<PostStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
