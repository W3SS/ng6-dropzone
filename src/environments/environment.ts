// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAnRPrg3cQCfidF_4g1y6DXWehEsTaYC3c",
    authDomain: "ng6-dropzone.firebaseapp.com",
    databaseURL: "https://ng6-dropzone.firebaseio.com",
    projectId: "ng6-dropzone",
    storageBucket: "ng6-dropzone.appspot.com",
    messagingSenderId: "1047785012292"
  }
};
