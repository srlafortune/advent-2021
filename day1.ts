import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");
const textByLine: string[] = text.split("\n");
const numberByLine: number[] = textByLine.map((x) => parseInt(x));

function checkIncreasesDecreases(arrayOfNumbers: number[]) {
  let increases = 0;
  let decreases = 0;
  let nothings = 0;
  // first part
  arrayOfNumbers.forEach((x, index) => {
    if (index === 0) {
      // don't check
    } else {
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

console.log(
  "Increases decreases input ",
  checkIncreasesDecreases(numberByLine)
);

const windowSums: number[] = [];

// second part
numberByLine.forEach((x, index) => {
  if (index === 0 || index === 1) {
    // don't check
  } else {
    windowSums.push(x + numberByLine[index - 1] + numberByLine[index - 2]);
  }
});

console.log("increases decreases window ", checkIncreasesDecreases(windowSums));
