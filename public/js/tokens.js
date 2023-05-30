// import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdparty";

async function googleSignInClicked() {
  try {
    alert('qwerty')
    const authUrl = await supertokensThirdParty.getAuthorisationURLWithQueryParamsAndSetState({
      providerId: 'google',
      authorisationURL: 'http://localhost:8080/auth/callback/google',
    });
    window.location.assign(authUrl);
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
      window.alert(err.message);
    } else {
      window.alert(err.message);
    }
  }
}