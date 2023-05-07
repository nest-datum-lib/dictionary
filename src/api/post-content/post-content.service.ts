import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
	Like,
} from 'typeorm';
import { 
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	objQueryRunner as utilsCheckObjQueryRunner,
} from '@nest-datum-utils/check';
import { NotFoundException } from '@nest-datum-common/exceptions';
import { Post } from '../post/post.entity';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { PostContent } from './post-content.entity';

export class PostContentService extends BindService {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'categoryOptionId';
	protected repositoryConstructor = PostContent;
	
	constructor(
		@InjectRepository(PostContent) protected repository: Repository<PostContent>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}): object {
		return {
			...super.manyGetColumns(customColumns),
			categoryOptionId: true,
			postId: true,
			value: true,
		};
	}

	protected manyGetQueryColumns(customColumns: object = {}): object {
		return {
			...super.manyGetQueryColumns(customColumns),
			value: true,
		};
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return {
			...super.oneGetColumns(customColumns),
			categoryOptionId: true,
			postId: true,
			value: true,
		};
	}
}
