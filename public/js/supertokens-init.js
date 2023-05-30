// import SuperTokens from 'supertokens-web-js';
// import Session from 'supertokens-web-js/recipe/session';
// import ThirdParty from 'supertokens-web-js/recipe/thirdparty'

supertokens.init({
  appInfo: {
    apiDomain: "http://localhost:8080",
    apiBasePath: "api/auth",
    appName: "backend",
  },
  recipeList: [
    supertokensSession.init(),
    supertokensThirdParty.init(),
  ],
});