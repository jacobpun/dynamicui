import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../model/field.base';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-form, [dynForm]',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldBase[];
  @Input() submitHandler: ({ }) => {};
  @Input() data$: Observable<{}>;

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    if (this.fields && this.fields.length > 0) {
      this.form = this.buildForm(this.fields);
      this.form.disable();

      this.data$.toPromise().then(
        data => {
          const formVal = {};
          Object.keys(data).forEach(key => {
            let val = data[key];
            if (!val) {
              const fld = this.fields.find(f => f.internalName.internalName === key)
              val = fld && fld.defaultValue ? fld.defaultValue : null;
            }
            formVal[key] = val;
          })
          this.form.setValue(formVal);
          this.form.enable();
        }
      )
    }
  }


  buildForm(fields: FieldBase[]): FormGroup {
    const form = {};
    fields.forEach(field => {
      if (field.required) {
        form[field.internalName.internalName] = new FormControl('', Validators.required)
      } else {
        form[field.internalName.internalName] = new FormControl('');
      }
    })
    return new FormGroup(form);
  }

  fieldTrackFun(index, item: FieldBase) {
    return item.internalName;
  }

  formSubmit() {
    if (this.submitHandler) {
      this.submitHandler(this.form);
    }
  }
}