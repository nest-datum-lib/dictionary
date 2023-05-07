import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { PostPostOption } from '../post-post-option/post-post-option.entity';
import { PostPostPostOption } from '../post-post-post-option/post-post-post-option.entity';
import { PostOption } from './post-option.entity';

@Injectable()
export class PostOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postOptionId';
	protected readonly optionContentColumnName: string = 'postPostOptionId';
	protected readonly repositoryConstructor = PostOption;
	protected readonly repositoryOptionConstructor = PostPostOption;
	protected readonly repositoryContentOptionConstructor = PostPostPostOption;

	constructor(
		@InjectRepository(PostOption) protected readonly repository: Repository<PostOption>,
		@InjectRepository(PostPostOption) public readonly repositoryOption: Repository<PostPostOption>,
		@InjectRepository(PostPostPostOption) public readonly repositoryContentOption: Repository<PostPostPostOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
