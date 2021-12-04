import { readFileSync } from "fs";

const text = readFileSync("./day2PuzzleInput.txt", "utf-8");
const textByLine: string[] = text.split("\n");

enum direction {
  Forward = "forward",
  Down = "down",
  Up = "up",
}

const numberByLine: { direction: direction; units: number }[] = textByLine.map(
  (x) => {
    const line = x.split(" ") as [direction: direction, units: string];
    return { direction: line[0], units: parseInt(line[1]) };
  }
);

class Submarine {
  horizontalPosition: number;
  depth: number;
  aim: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depth = 0;
    this.aim = 0;
  }

  move(moveDirection: direction, units: number): void {
    if (moveDirection === direction.Up) {
      this.aim -= units;
    }
    if (moveDirection === direction.Down) {
      this.aim += units;
    }
    if (moveDirection === direction.Forward) {
      this.horizontalPosition += units;
      this.depth += this.aim * units;
    }
  }
}

const MySubmarine = new Submarine();

numberByLine.forEach((x) => {
  MySubmarine.move(x.direction, x.units);
});

console.log(MySubmarine.depth, MySubmarine.horizontalPosition);
