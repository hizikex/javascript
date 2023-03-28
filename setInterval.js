// EXAMPLE1: 

//setInterval(function, millisecond)//
const greeting = setInterval(() => {
    // console.log("Good Morning")
}, 2000)

// EXAMPLE 2:
let count = 0;
const showTime = setInterval(() => {
    let dateTime = new Date();

let time = dateTime.toLocaleTimeString();
console.log(time)

count += 1
if (count == 4) {
    clearInterval(showTime);
}
}, 2000)


// const timeOut = setTimeout(() => {
//     console.log("STOP");
//     },  5000);