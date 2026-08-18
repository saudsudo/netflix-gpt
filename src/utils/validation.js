export const credValidations = (email, pwd) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isValidEmail) return "Invalid Email address, Please try again ";

  const isValidPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);
  if (!isValidPwd) return "Invalid Password, Please try again.";
  return "";
};
