import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import {
	IsEmail,
} from 'class-validator';
import { PostPostPostOption } from '../post-post-post-option/post-post-post-option.entity';
import { PostPostOption } from '../post-post-option/post-post-option.entity';
import { PostContent } from '../post-content/post-content.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Post {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public categoryId: string;

	@ManyToOne(() => Category, (category) => category.posts, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public category: Category;

	@Column({ default: '' })
	public postStatusId: string;

	@Column()
	@Index({ unique: true })
	public name: string;

	@Column({ default: '' })
	@Index()
	public description: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDelete: boolean = false;

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

	@OneToMany(() => PostPostOption, (postPostOption) => postPostOption.post, {
		cascade: true,
	})
	public postPostOptions: PostPostOption[];

	@OneToMany(() => PostPostPostOption, (postPostPostOption) => postPostPostOption.post, {
		cascade: true,
	})
	public postPostPostOptions: PostPostPostOption[];

	@OneToMany(() => PostContent, (postContent) => postContent.post, {
		cascade: true,
	})
	public postContents: PostContent[];
}
