import {Component, ElementRef, inject, input, OnInit, AfterContentInit, AfterViewInit, signal, contentChild} from '@angular/core';
import {FeatureFlagService} from './feature-flag.service';

@Component({
  selector: 'app-feature-switch',
  template: `
    @if (isFeatureEnabled() !== undefined && isFeatureEnabled() === true) {
      <ng-content select="[feature-is-on]"></ng-content>
    }
    @if (isFeatureEnabled() !== undefined && isFeatureEnabled() === false) {
      <ng-content select="[feature-is-off]"></ng-content>
    }
  `,
})
export class FeatureFlagComponent implements OnInit, AfterContentInit, AfterViewInit {
  private featureFlagService = inject(FeatureFlagService);

  isFeatureEnabled = signal<boolean | undefined>(undefined);

  readonly featureOnComponent = contentChild<ElementRef>('[feature-is-on]');
  readonly featureOffComponent = contentChild<ElementRef>('[feature-is-off]');
  readonly name = input.required<string>();

  async ngOnInit(): Promise<void> {
    this.isFeatureEnabled.set(await this.featureFlagService.isFeatureEnabled(this.name()));
  }

  ngAfterContentInit(): void {
    this.check();
  }

  ngAfterViewInit(): void {
    this.check();
  }

  private check(): void {
    // if (!this.featureOnComponent()) {
    //   throw new Error('A child component with a selector [feature-is-on] must be present.');
    // }
    // if (!this.featureOffComponent()) {
    //   throw new Error('A child component with a selector [feature-is-off] must be present.');
    // }
  }
}
