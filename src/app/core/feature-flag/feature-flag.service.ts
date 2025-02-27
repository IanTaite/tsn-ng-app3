import { inject, Injectable, Signal } from '@angular/core';
import { AppConfigurationClient } from "@azure/app-configuration";
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  private configurationService = inject(ConfigurationService);
  private config = this.configurationService.config;
  private connStr = this.config.appSettingsConnectionString;
  private azureClient = new AppConfigurationClient(this.connStr);

  async isFeatureEnabled(featureSwitchName: string): Promise<boolean|undefined> {
    try {
      const setting = await this.azureClient.getConfigurationSetting({ key: `.appconfig.featureflag/${featureSwitchName}` });
      if (setting && setting.value) {
        const parsedValue = JSON.parse(setting.value) as { enabled: boolean };
        return parsedValue.enabled;
      }
      return false;
    } catch {
      return undefined;
    }
  }
}
