const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,50}$/;
const regexCaps = /[A-Z]/g;
const regexLowerLetter = /[a-z]/g;
const regexNumber = /[0-9]/g;

export const isEmptyInput = (input) => {
  return input.length >= 1;
};

export const validateEmail = (value) => {
  return emailRegex.test(value);
};

export const validatePasswords = (pswd, cnfrmpswrd) => {
  return {
    passwordEquals: passwordRegex.test(pswd) !== passwordRegex.test(cnfrmpswrd),
    lengthPassword: isMajorThanEight(pswd),
    caps: hasCaps(pswd),
    lowerCase: hasLowerLetter(pswd),
    number: hasNumber(pswd),
  };
};

const isMajorThanEight = (value) => {
  if (value.length >= 8) {
    return true;
  } else {
    return false;
  }
};

const hasCaps = (value) => {
  return regexCaps.test(value);
};

const hasLowerLetter = (value) => {
  return regexLowerLetter.test(value);
};

const hasNumber = (value) => {
  return value.match(regexNumber);
};
