import ThirdParty from 'supertokens-node/recipe/thirdparty';
import Session from 'supertokens-node/recipe/session';
import Dashboard from 'supertokens-node/recipe/dashboard';

export const appInfo = {
  appName: 'backend',
  apiDomain: 'http://localhost:8080',
  websiteDomain: 'http://localhost:8080',
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
};

export const connectionUri =
  'https://dev-93a636a1e42511edb8c4998fb94b58d7-eu-west-1.aws.supertokens.io:3568';
export const apiKey = 'FBdzd-4RVbdhGgFEd5nr9SPz68ERx1';

export const recipeList = [
  ThirdParty.init({
    signInAndUpFeature: {
      providers: [
        ThirdParty.Google({
          clientId:
            '1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com',
          clientSecret: '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',
        }),
      ],
    },
  }),
  Session.init(),
  Dashboard.init(),
];