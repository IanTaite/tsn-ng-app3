import { ApplicationConfig, inject, provideAppInitializer, provideEnvironmentInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

import { ConfigurationService } from './core/configuration/configuration.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(async () => {
      const configurationService = inject(ConfigurationService);
      await configurationService.initializeConfiguration();
    })
  ]
};
