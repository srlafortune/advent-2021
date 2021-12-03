import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");
const textByLine: string[] = text.split("\n");
const numberByLine: number[] = textByLine.map((x) => parseInt(x));
