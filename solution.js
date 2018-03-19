
function validatePIN (pin) {
  let correctPin = new RegExp('^([0-9]{4}|[0-9]{6})$');
  return correctPin.test(pin);
}

