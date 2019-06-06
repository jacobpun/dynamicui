import { FieldBase } from './field.base';

export abstract class ChoiceFieldBase extends FieldBase {
    choices: {label: string, value: string}[] = [];
}