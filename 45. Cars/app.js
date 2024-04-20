"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function creatCar(manufacturer, model, ...options) {
    const carInfo = Object.assign({ manufacturer, model }, options);
    return carInfo;
}
const rollsRoyceInfo = creatCar("Toyota", "Camry", ["color", "blue"], ["optionalFeature", "Sunroof"]);
console.log(rollsRoyceInfo);
