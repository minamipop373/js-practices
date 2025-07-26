#!/usr/bin/env node

const args = process.argv.slice(2);
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

for (let i = 0; i < args.length; i++) {
  if (args[i] === "-y" && args[i + 1]) {
    const inputYear = parseInt(args[i + 1]);
    if (1970 <= inputYear && inputYear <= 2100) {
      year = inputYear;
    }
  }
  if (args[i] === "-m" && args[i + 1]) {
    const inputMonth = parseInt(args[i + 1]);
    if (inputMonth >= 1 && inputMonth <= 12) {
      month = inputMonth - 1;
    }
  }
}

console.log(`      ${month + 1}月 ${year}`);
console.log("日 月 火 水 木 金 土");

const firstDate = new Date(year, month, 1);
const lastDate = new Date(year, month + 1, 0);

let output = `${"   ".repeat(firstDate.getDay())}`;

for (let day = 1; day <= lastDate.getDate(); day++) {
  const lineBreak = (firstDate.getDay() + day) % 7 === 0 ? "\n" : "";
  output = `${output}${String(day).padStart(2, " ")} ${lineBreak}`;
}

console.log(output);
