const sentence = "請小心列車與月台間之空隙。 Please Mind the Gap Between the Train and the Platform.";
// for simulating typing romance languages with a latin alphabet at a realistic speed: try + 132
// for simulating typing mandarin at a realistic speed: try + 216
// hello there from lighthouse labs
// Eu não espero Carnaval chega pra ser vadia. Sou todo dia. Sou todo dia.
// 請小心列車與月台間之空隙。 Please Mind the Gap Between the Train and the Platform.
// 請勿靠近車門。 Please Stand Back from the Doors.
// ドアが閉まります。ドアにご注意ください。 Doors Are Closing. Please Be Careful of the Doors.

let timer = 1500;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer = timer + 136;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timer);