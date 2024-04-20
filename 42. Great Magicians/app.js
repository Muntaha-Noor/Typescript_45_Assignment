"use strict";
// Define a function to make magician great
function makeGreat(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
// Define a function to show magicians
function showMagicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
// Example
const magiciansArray = ["Merlin", "Houdini", "Gandalf"];
const greatMagicians = makeGreat(magiciansArray);
showMagicians(greatMagicians);
