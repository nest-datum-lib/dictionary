import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { PostPostOption } from '../post-post-option/post-post-option.entity';
import { Post } from './post.entity';

@Injectable()
export class PostService extends MainService {
	protected readonly withEnvKey: boolean = false;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Post;
	protected readonly repositoryBindOptionConstructor = PostPostOption;
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postOptionId';

	constructor(
		@InjectRepository(Post) protected readonly repository: Repository<Post>,
		@InjectRepository(PostPostOption) protected repositoryBindOption: Repository<PostPostOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			categoryId: true,
			postStatusId: true,
			name: true,
			description: true,
			isDeleted: true,
			isNotDelete: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			categoryId: true,
			postStatusId: true,
			name: true,
			description: true,
			isDeleted: true,
			isNotDelete: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			name: true,
			description: true,
		});
	}
}
