import { Component } from '@angular/core';
import { FeatureFlagComponent } from './core/feature-flag/feature-flag.component';
import { RedAppleComponent } from './components/red-apple.component';
import { GreenAppleComponent } from './components/green-apple.component';

@Component({
  selector: 'app-root',
  imports: [FeatureFlagComponent, RedAppleComponent, GreenAppleComponent],
  template: `
    <app-feature-flag name="red-apple">
      <app-red-apple featureIsOn />
      <app-green-apple featureIsOff />
    </app-feature-flag>
  `,
})
export class AppComponent {}
