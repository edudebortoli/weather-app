// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiForecastUrl: `http://api.openweathermap.org/data/2.5/onecall?appid=4e217c04aec8fb2f55f24ab2c311a2e1&exclude=hourly,minutely`,
  apiCityUrl: `http://api.openweathermap.org/geo/1.0/direct?appid=4e217c04aec8fb2f55f24ab2c311a2e1`
};


// https://api.openweathermap.org/data/2.5/onecall?appid=4e217c04aec8fb2f55f24ab2c311a2e1&exclude=hourly,minutely&units=metric&lat=60&lon=30

// http://api.openweathermap.org/geo/1.0/direct?appid=4e217c04aec8fb2f55f24ab2c311a2e1&q=london&limit=1

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
