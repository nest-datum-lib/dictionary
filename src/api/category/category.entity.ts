import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
	OneToMany,
} from 'typeorm';
import {
	IsEmail,
} from 'class-validator';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { Post } from '../post/post.entity';

@Entity()
export class Category {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public categoryStatusId: string;

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

	@OneToMany(() => CategoryCategoryOption, (categoryCategoryOption) => categoryCategoryOption.category, {
		cascade: true,
	})
	public categoryCategoryOptions: CategoryCategoryOption[];

	@OneToMany(() => CategoryCategoryCategoryOption, (categoryCategoryCategoryOption) => categoryCategoryCategoryOption.category, {
		cascade: true,
	})
	public categoryCategoryCategoryOptions: CategoryCategoryCategoryOption[];

	@OneToMany(() => Post, (post) => post.category, {
		cascade: true,
	})
	public posts: Post[];
}
