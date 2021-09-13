// Code your solutions in this file

//create a new, empty array to hold the messages;
//iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
//after the loop finishes and all of the messages have been added to the new array, return the new array.

function writeCards(names, event) {
    let messages = [];
    for(let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}
//To get more acquainted with while, your task is to write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log(). Note that this means that running countDown(10); would actually log 11 times:
function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;

    }
}