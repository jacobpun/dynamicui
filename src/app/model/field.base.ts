import { HintEvent } from './hint.event';
import { FieldControlType } from './field.control.type';
import { InternalName } from './internal.name';

export abstract class FieldBase {
    abstract displayAs: FieldControlType;
    readonly internalName: InternalName;
    defaultValue: string | number | boolean;
    required: boolean = false;
    placeHolder: string = '';
    checkUniqueFunc:  (val) => boolean;
    hintFunc: (hint: HintEvent) => void;
    constructor(internalName: string, public displayName: string) {
        this.internalName = new InternalName(internalName);
    }
}