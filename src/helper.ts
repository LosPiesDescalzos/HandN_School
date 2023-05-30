class Helper {

  public static checkEmail(email) {
  return !(!email.includes("@") || !email.includes("."));
}

  public static checkPasswordLenght(password){
  return password.length > 7;
}


  public static checkPasswordValid(password){
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const valid = hasLetter && hasNumber
    return valid != false;
  }

  public static checkId(id){
  return typeof id === "number";

}}