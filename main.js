import chalk from "chalk";
//-------------COUNTDOWN TIMER-----------------
// New date object
let date_obj = new Date();
// Current date
// Adjust 0 before single digit date
let date = ("0" + date_obj.getDate()).slice(-2);
// Current month
let month = ("0" + date_obj.getMonth()).slice(-2);
// Current year
let year = date_obj.getFullYear();
// Current Hour
let Hour = date_obj.getHours();
// Current Minute
let Minute = date_obj.getMinutes();
// Current Second
let Second = date_obj.getSeconds();
// Print date in YYY - MM - DD format
console.log(chalk.green("Current Date:" + " " + year + " " + month + " " + date));
// Print date & time in YYY - MM - DD HH : MM : SS format
console.log(chalk.green("Current Date & Time:" + " " + year + " " + month + " " + date + " " + Hour + " " + Minute + " " + Second));
// Print time in HH : MM format
console.log(chalk.green("Current Time:" + " " + Hour + ":" + Minute));
