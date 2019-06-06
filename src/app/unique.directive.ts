import { FormGroup, AbstractControl, Validators, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input, OnInit } from '@angular/core';
import { FieldBase } from './model/field.base';

@Directive({
  selector: '[unique]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: UniqueDirective,
    }
  ]
})
export class UniqueDirective implements OnInit, Validator {
  @Input() field: FieldBase;
  constructor() { }

  ngOnInit() {
  }

  validate(c: AbstractControl) {
    if(this.field.checkUniqueFunc) {
      if (this.field.checkUniqueFunc(c.value)) {
        return {}
      } else {
        return {
          notUnique: true,
        }
      }
    }
  }
}