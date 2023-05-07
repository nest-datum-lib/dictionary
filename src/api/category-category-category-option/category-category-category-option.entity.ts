import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { Many } from '@nest-datum/many';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { Category } from '../category/category.entity';

@Entity()
export class CategoryCategoryCategoryOption extends Many {
	@Column()
	public categoryCategoryOptionId: string;

	@ManyToOne(() => CategoryCategoryOption, (categoryCategoryOption) => categoryCategoryOption.categoryCategoryCategoryOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public categoryCategoryOption: CategoryCategoryOption;

	@Column()
	public categoryId: string;

	@ManyToOne(() => Category, (category) => category.categoryCategoryCategoryOptions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public category: Category;
}
