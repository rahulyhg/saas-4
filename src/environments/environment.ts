// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:65535',
  userKey: 'user',
  firebase: {
    apiKey: "AIzaSyCU26kx3QIKGmqdoJqaLLSQwcjC2RwWQCA",
    authDomain: "eveplus-f9457.firebaseapp.com",
    databaseURL: "https://eveplus-f9457.firebaseio.com",
    projectId: "eveplus-f9457",
    storageBucket: "",
    messagingSenderId: "971425804568",
    appId: "1:971425804568:web:935292325fc77cee"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
