const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const isEmptyInput = (input) => {
  return input.length >= 1;
};

export const validateEmail = (value) => {
  return emailRegex.test(value);
};

export const validatePasswords = (pswd) => {
  return {
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
  const regexCaps = new RegExp('[A-Z]', 'g');
  const isCapsCorrect = regexCaps.test(value);
  return isCapsCorrect;
};

const hasLowerLetter = (value) => {
  const regexLowerLetter = new RegExp('[a-z]', 'g');
  const isLowerCorrect = regexLowerLetter.test(value);
  return isLowerCorrect;
};

const hasNumber = (value) => {
  const regexNumber = new RegExp('[0-9]', 'g');
  const hasNumberCorrect = value.match(regexNumber);
  return hasNumberCorrect;
};
