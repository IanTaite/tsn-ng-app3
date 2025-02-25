import { Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  public isFeatureEnabled(feature: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}
