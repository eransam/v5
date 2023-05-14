// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.

export const environment = {
  apiPath: window.location.protocol + '//' + window.location.host + '/',

  production: true,
  firebase: {
    apiKey: 'AIzaSyB78aPWrovray_gVpZmadbDmEr5AzypOAA',
    // authDomain: 'evolvision-rnd.firebaseapp.com',
    // databaseURL: 'https://evolvision-rnd.firebaseio.com',
    projectId: 'lul2000-project',
    // storageBucket: 'evolvision-rnd.appspot.com',
    // messagingSenderId: '890895206035',
    // appId: '1:890895206035:web:a6d0e1574d59ffe40bef66',
    // measurementId: 'G-WYKKLCYFHE',
  },
  googleApiKey: 'AIzaSyB78aPWrovray_gVpZmadbDmEr5AzypOAA',
};
