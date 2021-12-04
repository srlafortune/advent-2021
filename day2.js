"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const text = (0, fs_1.readFileSync)("./day2PuzzleInput.txt", "utf-8");
const textByLine = text.split("\n");
var direction;
(function (direction) {
    direction["Forward"] = "forward";
    direction["Down"] = "down";
    direction["Up"] = "up";
})(direction || (direction = {}));
const numberByLine = textByLine.map((x) => {
    const line = x.split(" ");
    return { direction: line[0], units: parseInt(line[1]) };
});
class Submarine {
    constructor() {
        this.horizontalPosition = 0;
        this.depth = 0;
        this.aim = 0;
    }
    move(moveDirection, units) {
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
