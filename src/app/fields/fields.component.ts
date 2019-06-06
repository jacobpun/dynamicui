import { FieldDropDown } from './../model/field.dd';
import { FieldNote } from './../model/field.text';
import { FieldNumber } from './../model/field.number';
import { Component, OnInit } from '@angular/core';
import { FieldBase } from '../model/field.base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
  fields: FieldBase[] = [];
  data$;

  constructor() { }

  ngOnInit() {
    this.generateFieds();


    this.data$ = new Observable(obs => {
      setTimeout(() => {
        obs.next(
          {
            number01: 999,
            'dd-01': 'choice2',
            'text-01': 'aaa',
            number02: undefined
          }
        )
        obs.complete();
      }), 2000
    })
  }

  generateFieds() {
    const number01 = new FieldNumber('number 01', 'First Number');
    number01.defaultValue = 1;
    number01.checkUniqueFunc = (num) => num > 100; // dummy implementation
    number01.hintFunc = () => console.log('hint clicked');
    this.fields.push(number01);

    const text01 = new FieldNote('text-01', 'First Text');
    text01.defaultValue = 'dummy data';
    text01.required = true;
    text01.placeHolder = "initial";
    this.fields.push(text01);

    const dd01 = new FieldDropDown('dd-01', 'Dropdown 01');
    dd01.choices = [
      { value: 'choice1', label: 'Choice 01' },
      { value: 'choice2', label: 'Choice 02' },
      { value: 'choice3', label: 'Choice 03' },
    ]

    const number02 = new FieldNumber('number 02', 'Second Number');
    number02.defaultValue = undefined;
    // number02.checkUniqueFunc = (num) => num > 100; // dummy implementation
    this.fields.push(number02);


    this.fields.push(dd01);
  }

  submitHandler = form => console.log(form.value);
}