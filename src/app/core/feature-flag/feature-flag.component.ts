import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FeatureFlagService } from './feature-flag.service';

@Component({
  selector: 'app-feature-flag',
  template: `
    @if (isFeatureEnabled() !== undefined && isFeatureEnabled() === true) {
      <ng-content select="[featureIsOn]"></ng-content>
    }
    @if (isFeatureEnabled() !== undefined && isFeatureEnabled() === false) {
      <ng-content select="[featureIsOff]"></ng-content>
    }
  `
})
export class FeatureFlagComponent implements OnInit {
  private featureFlagService = inject(FeatureFlagService);

  readonly name = input.required<string>();
  readonly isFeatureEnabled = signal<boolean | undefined>(undefined);

  async ngOnInit() {
    this.isFeatureEnabled.set(await this.featureFlagService.isFeatureEnabled(this.name()));
  }
}
