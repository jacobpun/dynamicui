import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FieldBase } from '../model/field.base';
import { FieldControlType } from '../model/field.control.type';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit {
  errorMessage: {[key: string]: string} = {
    required: 'This field is required',
    notUnique: 'Field is not unique',
  };
  @Input() form: FormGroup;
  @Input() field: FieldBase;
  @Output() hint: EventEmitter<any> = new EventEmitter();

  @ViewChild('text') textTemplate: TemplateRef<any>;
  @ViewChild('number') numberTemplate: TemplateRef<any>;
  @ViewChild('numberUnique') numberUniqueTemplate: TemplateRef<any>;
  @ViewChild('dropDown') ddTemplate: TemplateRef<any>;

  formControl: AbstractControl;

  constructor() { }

  ngOnInit() {
    this.formControl = this.form.controls[this.field.internalName.internalName];
  }

  getTemplate() {
    switch(this.field.displayAs) {
      case FieldControlType.Number:
        if (this.field.checkUniqueFunc) {
          return this.numberUniqueTemplate;
        } else {
          return this.numberTemplate;
        }
      case FieldControlType.Text:
        return this.textTemplate;
      case FieldControlType.DropDown:
        return this.ddTemplate;
    }
  }

  onHintClicked() {
    this.hint.emit();
  }

  showError() {
    return this.formControl && this.formControl.touched && this.formControl.invalid;
  }

  getErrorMessage(): string {
    return Object.keys(this.formControl.errors).reduce((m, k) => m + `\r\n ${this.errorMessage[k]}` , '')
  }
}