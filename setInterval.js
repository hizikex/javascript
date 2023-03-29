// EXAMPLE1: 

//setInterval(function, millisecond)//
const greeting = setInterval(() => {
    // console.log("Good Morning")
}, 2000)

// EXAMPLE 2:
// Display the local time at a specified interval
let count = 0;
const showTime = setInterval(() => {
    let dateTime = new Date();

let time = dateTime.toLocaleTimeString();
console.log(time)

count ++
if (count == 4) {
    clearInterval(showTime);
}
}, 2000)

// EXAMPLE 3: 
//Display random numbers between 1 - 10. And display the total random numbers displayed after 5 counts//
    let sum = 0;
const random = setInterval(() => {
    let randomNo = Math.floor((Math.random() * 10) + 1);
    sum = randomNo + sum
    // console.log(randomNo);
}, 500);
    
    const displayTotal = setTimeout(() => {
        // console.log(`Sum of random numbers after 5 count is ${sum}`)
    // clearInterval(random)
    }, 3000);
