import { FieldControlType } from './field.control.type';
import { FieldBase } from './field.base';
import { ChoiceFieldBase } from './choice.field.base';

export class FieldCheckBox extends ChoiceFieldBase {
    displayAs: FieldControlType.CheckBox;
}