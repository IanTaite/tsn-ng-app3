import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IConfiguration} from './IConfiguration';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private http = inject(HttpClient);
  private configuration!: IConfiguration;

  public get config(): IConfiguration {
    return this.configuration;
  }

  /*
    Initialize configuration from a JSON file.
    Called by Angular's bootstrap process.
  */
  public async initializeConfiguration() {
    const req = this.http.get<IConfiguration>('/assets/configuration.json');
    await firstValueFrom(req).then((config) => {
      this.configuration = Object.freeze(config);
    });
    return;
  }
}
