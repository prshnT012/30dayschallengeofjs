//Task-7:  wap to check a year is leap year or not???

let year = 1900;

if ((year % 400 == 0) || year % 100 != 0 && year % 4 == 0) {
    console.log(`Year ${year} is a leap year.`);
} else {
    console.log(`Year ${year} is not a leap year.`);
}