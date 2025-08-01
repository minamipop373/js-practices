#!/usr/bin/env node

const args = process.argv;
let inputYear;
let inputMonth;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "-y" && args[i + 1]) {
    inputYear = parseInt(args[i + 1]);
  }
  if (args[i] === "-m" && args[i + 1]) {
    inputMonth = parseInt(args[i + 1]);
  }
}
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

if (1970 <= inputYear && inputYear <= 2100) {
  year = inputYear;
}

if (1 <= inputMonth && inputMonth <= 12) {
  month = inputMonth - 1;
}

console.log(`      ${month + 1}月 ${year}`);
console.log("日 月 火 水 木 金 土");

const firstDate = new Date(year, month, 1);
const lastDate = new Date(year, month + 1, 0);

let output = "   ".repeat(firstDate.getDay());

for (let day = 1; day <= lastDate.getDate(); day++) {
  const paddedDay = String(day).padStart(2, " ");
  const isSaturday = (firstDate.getDay() + day - 1) % 7 === 6;
  const isLastDay = day === lastDate.getDate();

  output += paddedDay;
  if (!isLastDay && isSaturday) {
    output += "\n";
  } else if (!isLastDay) {
    output += " ";
  }
}
console.log(output);
