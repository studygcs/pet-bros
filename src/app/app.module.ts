import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { AppComponent } from './app.component';
import { Config } from './common/index';
import { SHARED_MODULES, COMPONENT_DECLARATIONS, PROVIDERS } from './app.common';

import { UserService } from './user.service';
import { NavigationService } from './navigation.service';
import { PetFinderService, API_KEY_TOKEN } from 'petfinder-angular-service';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(<any>http, './assets/i18n/', '.json');
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ...SHARED_MODULES,
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class AppModule {}
