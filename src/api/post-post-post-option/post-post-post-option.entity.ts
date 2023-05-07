import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { Many } from '@nest-datum/many';
import { PostPostOption } from '../post-post-option/post-post-option.entity';
import { Post } from '../post/post.entity';

@Entity()
export class PostPostPostOption extends Many {
	@Column()
	public postPostOptionId: string;

	@ManyToOne(() => PostPostOption, (postPostOption) => postPostOption.postPostPostOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public postPostOption: PostPostOption;

	@Column()
	public postId: string;

	@ManyToOne(() => Post, (post) => post.postPostPostOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public post: Post;
}
