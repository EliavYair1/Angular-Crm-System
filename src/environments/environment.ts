// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase/app';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCyTfA9f_L3mERsc8AgZCcYGF6hsYaBh1s',
    authDomain: 'royale-crmproject.firebaseapp.com',
    projectId: 'royale-crmproject',
    storageBucket: 'royale-crmproject.appspot.com',
    messagingSenderId: '1094316467871',
    appId: '1:1094316467871:web:2d766506e0f120ed4524aa',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
