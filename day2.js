"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const text = (0, fs_1.readFileSync)("./input.txt", "utf-8");
const textByLine = text.split("\n");
const numberByLine = textByLine.map((x) => parseInt(x));
