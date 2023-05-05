import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { FieldContentService } from './field-content.service';

@Controller(`${process.env.SERVICE_DICTIONARY}/field/content`)
export class FieldContentHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'fieldId';
	protected readonly optionRelationColumnName: string = 'contentId';
	
	constructor(
		protected service: FieldContentService,
	) {
		super();
	}
}
