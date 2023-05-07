import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { PostPostOption } from './post-post-option.entity';


export class PostPostOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'postId';
	protected readonly optionRelationColumnName: string = 'postOptionId';
	protected repositoryConstructor = PostPostOption;
	
	constructor(
		@InjectRepository(PostPostOption) protected repository: Repository<PostPostOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
