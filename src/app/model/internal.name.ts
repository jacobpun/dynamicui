export class InternalName {
    readonly original: string;
    readonly internalName: string;
    constructor(internalName: string) {
        this.original = internalName;
        this.internalName = internalName.replace(/ /g, '');
    }
}