import { signInAndUp } from "supertokens-web-js/recipe/thirdparty";

async function handleGoogleCallback() {
  try {
    const response = await supertokensThirdParty.signInAndUp();
    if (response.status === "OK") {
      console.log(response.user)
      if (response.createdNewUser) {
      } else {
      }
      window.location.assign("/account");
    } else {
      window.alert("No email provided by social login. Please use another form of login");
      window.location.assign("/enter");
    }
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}