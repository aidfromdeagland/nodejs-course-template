const charCodeFirstLower = 97;
const charCodeLastLower = 122;
const charCodeFirstUpper = 65;
const charCodeLastUpper = 90;
const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLength = alphabetLower.length;

function encrypt(input, shift, mode) {
  shift = shift % alphabetLength;
  const alphabetLowerShifted =
    mode === 'encode'
      ? alphabetLower.slice(shift) + alphabetLower.slice(0, shift)
      : alphabetLower.slice(alphabetLength - shift) +
        alphabetLower.slice(0, alphabetLength - shift);
  const alphabetUpperShifted =
    mode === 'encode'
      ? alphabetUpper.slice(shift) + alphabetUpper.slice(0, shift)
      : alphabetUpper.slice(alphabetLength - shift) +
        alphabetUpper.slice(0, alphabetLength - shift);

  let result = '';

  for (let i = 0; i < input.length; i++) {
    const currentCode = input.charCodeAt(i);
    if (currentCode >= charCodeFirstLower && currentCode <= charCodeLastLower) {
      result += alphabetLowerShifted[alphabetLower.indexOf(input[i])];
    } else if (
      currentCode >= charCodeFirstUpper &&
      currentCode <= charCodeLastUpper
    ) {
      result += alphabetUpperShifted[alphabetUpper.indexOf(input[i])];
    } else {
      result += input[i];
    }
  }

  return result;
}

module.exports = encrypt;
