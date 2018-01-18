import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { RouterModule } from '../common';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FirebaseModule } from '../firebase';

@NgModule({
  declarations: [],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    RouterModule,
    FirebaseModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
