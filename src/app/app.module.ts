import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FieldsComponent } from './fields/fields.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FieldComponent } from './field/field.component';
import { UniqueDirective } from './unique.directive';

@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    DynamicFormComponent,
    FieldComponent,
    UniqueDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
