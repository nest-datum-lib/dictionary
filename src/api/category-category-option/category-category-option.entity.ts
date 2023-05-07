import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { CategoryCategoryCategoryOption } from '../category-category-category-option/category-category-category-option.entity';
import { CategoryOption } from '../category-option/category-option.entity';
import { Category } from '../category/category.entity';

@Entity()
export class CategoryCategoryOption extends Bind {
	@Column()
	public categoryOptionId: string;

	@ManyToOne(() => CategoryOption, (categoryOption) => categoryOption.categoryCategoryOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public categoryOption: CategoryOption;

	@Column()
	public categoryId: string;

	@ManyToOne(() => Category, (category) => category.categoryCategoryOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public category: Category;

	@OneToMany(() => CategoryCategoryCategoryOption, (categoryCategoryCategoryOption) => categoryCategoryCategoryOption.categoryCategoryOption, {
		cascade: true,
	})
	public categoryCategoryCategoryOptions: CategoryCategoryCategoryOption[];
}
