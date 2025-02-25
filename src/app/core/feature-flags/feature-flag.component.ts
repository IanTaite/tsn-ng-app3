import {Component, inject, input, OnInit} from '@angular/core';
import {FeatureFlagService} from './feature-flag.service';

@Component({
  selector: 'app-feature-switch',
  template: ` @if (isFeatureEnabled !== undefined && isFeatureEnabled === true) {
      <ng-content select="[feature-is-on]"></ng-content>
    }
    @if (isFeatureEnabled !== undefined && isFeatureEnabled === false) {
      <ng-content select="[feature-is-off]"></ng-content>
    }`,
})
export class FeatureFlagComponent implements OnInit {
  private featureFlagService = inject(FeatureFlagService);

  isFeatureEnabled: boolean | undefined = true;

  readonly name = input.required<string>();

  async ngOnInit(): Promise<void> {
    this.isFeatureEnabled = await this.featureFlagService.isFeatureEnabled(this.name());
  }
}
