// let vistorAge = 12;
// let isStudent = true;
function ticketPrice(vistorAge, isStudent) {
  if (vistorAge <= 6) {
    console.log("bez maksas");
  } else if (isStudent == true) {
    console.log("cena ir 5 eiro");
  } else {
    console.log("cena ir 10 eiro");
  }
}
ticketPrice(12, true);
ticketPrice(35, false);
