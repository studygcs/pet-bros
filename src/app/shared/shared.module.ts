import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '../common';
import { FirebaseModule } from '../firebase';

import { PetFinderService, API_KEY_TOKEN } from 'petfinder-angular-service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FirebaseModule
  ]
})
export class SharedModule { };
