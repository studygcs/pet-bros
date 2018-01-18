import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// nativescript
import { NSModuleFactoryLoader } from 'nativescript-angular/router';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './app.common';

import { UserService } from './user.service';
import { NavigationService } from './navigation.service';
import { PetFinderService, API_KEY_TOKEN } from 'petfinder-angular-service';

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(<any>http, '/assets/i18n/', '.json');
}

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ...SHARED_MODULES
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  providers: [
    UserService,
    NavigationService,
    { provide: API_KEY_TOKEN, useValue: '3b3fe2619dfd3c4e94c2d7efd24592e1' },
    PetFinderService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
