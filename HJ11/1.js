let consol = {};
for (let key in console) {
  consol[key] = console[key];
}
consol.log("Smth special");
