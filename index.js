const pinSecret = "55";
let guess = 0;

while(true) {
  const PIN = prompt("Enter PIN, please: ");
  if (PIN === pinSecret ) {
    alert(
      "Congratulations, the password is correct. Wasted attempts: " +
        guess +
        "!"
    );
    break;
  } else if (PIN < pinSecret) {
    guess++;
    alert(
      'The secret code is larger than the number you entered. Press "OK" and try again.'
    );
  } else if (PIN > pinSecret) {
    guess++;
    alert(
      'The secret code is smaller than the number you entered. Press "OK" and try again.'
    );
  }
}