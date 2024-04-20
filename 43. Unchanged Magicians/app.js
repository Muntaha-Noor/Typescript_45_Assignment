"use strict";
function makeGreat(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
function showMagicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
const originalMagicians = ["Merlin", "Houdini", "Gandalf"];
const greatMagicians = makeGreat([...originalMagicians]);
showMagicians(originalMagicians);
showMagicians(greatMagicians);
