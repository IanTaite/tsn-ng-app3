# FeatureFlagClientUi

This project demonstrates:

- Bootstrapping the application using the app-initializer
- Loading application settings from the assets folder.
- Conditionally rendering components based on feature flags

## How It Works

When the app bootstraps, app start is delayed until the application settings are loaded from the assets folder.

The settings contain a connection string used to connect to Azure.

The app component uses a helper component to conditionally render one of two components depending on the value of a feature flag.

```html
<app-feature-flag [name]="'red-apple'">
    <app-red-apple featureIsOn />
    <app-green-apple featureIsOff />
</app-feature-flag>
```
The API is straightforward.
- If the value of feature flag 'red-apple' cannot be determined, nothing is rendered.
- If the value of feature flag 'red-apple' is true, the 'app-red-apple' component is rendered.
- If the value of feature flag 'red-apple' is false, the 'app-green-apple' component is rendered.

The selectors "featureIsOn" and "featureIsOff" act as markers on the components to which they're applied.

The feature-flag component depends on the FeatureFlagService to supply the feature flag values which are obtained dynamically from azure.

Nothing is cached, so every time the app asks for a feature flag, Azure will be queried, and this is by design.

It may well be the case that ultimately we choose not to directly query Azure from the frontend. However we end up doing it, the feature flag component and service provide a reasonable basic abstraction for getting feature flag checking into frontend code, whilst the implementation of the feature-flag service can be changed without much blast damage.

## Getting Started

- Install: `npm install`
- Serve: `npm start`
- Build: `npm run build`

## Credits

This app was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0
