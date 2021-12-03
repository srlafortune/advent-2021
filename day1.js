"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const text = (0, fs_1.readFileSync)("./day1PuzzleInput.txt", "utf-8");
const textByLine = text.split("\n");
const numberByLine = textByLine.map((x) => parseInt(x));
function checkIncreasesDecreases(arrayOfNumbers) {
    let increases = 0;
    let decreases = 0;
    let nothings = 0;
    // first part
    arrayOfNumbers.forEach((x, index) => {
        if (index === 0) {
            // don't check
        }
        else {
            if (x > arrayOfNumbers[index - 1]) {
                increases++;
            }
            if (x < arrayOfNumbers[index - 1]) {
                decreases++;
            }
            if (x === arrayOfNumbers[index - 1]) {
                nothings++;
            }
        }
    });
    return { increases, decreases, nothings };
}
console.log("Increases decreases input ", checkIncreasesDecreases(numberByLine));
const windowSums = [];
// second part
numberByLine.forEach((x, index) => {
    if (index === 0 || index === 1) {
        // don't check
    }
    else {
        windowSums.push(x + numberByLine[index - 1] + numberByLine[index - 2]);
    }
});
console.log("increases decreases window ", checkIncreasesDecreases(windowSums));
