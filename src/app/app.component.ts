import {Component} from '@angular/core';
import {FeatureFlagComponent} from './core/feature-flags/feature-flag.component';
import {RedAppleComponent} from './components/red-apple.component';
import {GreenAppleComponent} from './components/green-apple.component';

@Component({
  selector: 'app-root',
  imports: [FeatureFlagComponent, RedAppleComponent, GreenAppleComponent],
  template: `
    <app-feature-switch name="red-apple">
      <app-red-apple feature-is-on />
      <app-green-apple feature-is-off />
    </app-feature-switch>
  `,
})
export class AppComponent {}
