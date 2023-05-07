import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { PostPostOption } from '../post-post-option/post-post-option.entity';

@Entity()
export class PostOption extends Option {
	@OneToMany(() => PostPostOption, (postPostOption) => postPostOption.postOption, {
		cascade: true,
	})
	public postPostOptions: PostPostOption[];
}
