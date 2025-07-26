#!/usr/bin/env node

// 引数処理
const args = process.argv.slice(2);
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth(); // 0-based

for (let i = 0; i < args.length; i++) {
  if (args[i] === "-y" && args[i + 1]) {
    const y = parseInt(args[i + 1]);
    if (y >= 1970 && y <= 2100) year = y;
  }
  if (args[i] === "-m" && args[i + 1]) {
    const m = parseInt(args[i + 1]);
    if (m >= 1 && m <= 12) month = m - 1;
  }
}

// 月名と曜日ヘッダー
const monthNames = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

console.log(`     ${monthNames[month]} ${year}`);
console.log(weekDays.join(" "));

const firstDate = new Date(year, month, 1);
const lastDate = new Date(year, month + 1, 0);

let output = `${"   ".repeat(firstDate.getDay())}`;

for (let day = 1; day <= lastDate.getDate(); day++) {
  const lineBreak = (firstDate.getDay() + day) % 7 === 0 ? "\n" : "";
  output = `${output}${String(day).padStart(2, " ")} ${lineBreak}`;
}

console.log(output);
