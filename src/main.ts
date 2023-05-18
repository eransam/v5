import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const updateApiPath = () => {
  if (environment.production) {
    environment.apiPath =
      window.location.protocol + '//' + window.location.host + '/';
  }
};

updateApiPath();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
