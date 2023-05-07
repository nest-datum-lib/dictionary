import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { PostPostPostOption } from './post-post-post-option.entity';

@Injectable()
export class PostPostPostOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postPostOptionId';
	protected readonly repositoryConstructor = PostPostPostOption;

	constructor(
		@InjectRepository(PostPostPostOption) protected readonly repository: Repository<PostPostPostOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
