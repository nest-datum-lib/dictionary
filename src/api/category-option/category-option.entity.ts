import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { CategoryCategoryOption } from '../category-category-option/category-category-option.entity';
import { PostContent } from '../post-content/post-content.entity';

@Entity()
export class CategoryOption extends Option {
	@OneToMany(() => CategoryCategoryOption, (categoryCategoryOption) => categoryCategoryOption.categoryOption, {
		cascade: true,
	})
	public categoryCategoryOptions: CategoryCategoryOption[];

	@OneToMany(() => PostContent, (postContent) => postContent.categoryOption, {
		cascade: true,
	})
	public postContents: PostContent[];
}
