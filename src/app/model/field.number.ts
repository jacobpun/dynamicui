import { FieldControlType } from './field.control.type';
import { FieldBase } from './field.base';

export class FieldNumber extends FieldBase {
    displayAs = FieldControlType.Number;
}