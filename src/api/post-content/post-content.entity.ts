import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Post } from '../post/post.entity';
import { CategoryOption } from '../category-option/category-option.entity';

@Entity()
export class PostContent {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public userId: string;

	@Column({ default: '' })
	public postId: string;

	@ManyToOne(() => Post, (post) => post.postContents, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public post: Post;

	@Column({ default: '' })
	public categoryOptionId: string;

	@ManyToOne(() => CategoryOption, (categoryOption) => categoryOption.postContents, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public categoryOption: CategoryOption;

	@Column('text', {
		nullable: true,
	})
	public value: string;

	@CreateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP', 
	})
	public createdAt: Date;

	@UpdateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP',
		onUpdate: 'CURRENT_TIMESTAMP', 
	})
	public updatedAt: Date;
}
