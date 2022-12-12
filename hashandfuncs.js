// A quick guide to objects and functions in JavaScript!

/*
    What are functions?

    Functions are a block of code that you can re-use anywhere in your program so that you are NOT repeating yourself often.
    Code that is repeated may run into more errors. This is because when you need to change a part of code that is repeated,
    you must change that part of the code for EVERY block that you had repeated.

    Functions increase the readability in your code! So instead of having a block of code that is constantly repeated via copy/paste,
    you can call your functions instead to make it easier to read!
*/

// Using functions:
// There are two ways to create functions in JavaScript,
// The regular way and arrow functions, but we'll stick to regular functions for now.

// Lets create a simple algorithm that gets the sum of an array
let firstArray = [5, 3, 2] // We set up our array
let firstSum1 = 0 // We set up our sum to keep a running total

// Algorithm to get the sum
for (let i = 0; i < firstArray.length; i++) {
    const currentNumber = firstArray[i] // As we are visiting each element within the array, we are storing it into a variable to make our code easier to read
    firstSum1 += currentNumber // Adding our current number to our total
}

// Now what if we want to do the same for another array?
let secondArray = [10, 12, 6]
let secondSum1 = 0

for (let i = 0; i < secondArray.length; i++) {
    const currentNumber = secondArray[i]
    secondSum1 += currentNumber
}

// Now a third one... This is getting pretty tedious ヾ( ･`⌓´･)ﾉﾞ
let thirdArray = [12, 4, 1, 2]
let thirdSum1 = 0

for (let i = 0; i < thirdArray.length; i++) {
    const currentNumber = thirdArray[i]
    thirdSum1 += currentNumber
}

// As we can see, our code is pretty long just to get the sum of three different arrays, and is clearly copy and pasted but with different vairable names.
// To combat this, we can create a function to make it easier to read and reduce the amount of code we need to change in the future (future proofing! °˖✧◝(⁰▿⁰)◜✧˖°)
// Functions don't necessarily need parameters, but if we want to give it data, then we HAVE to give it a parameter to work with.
// Exmaple: We are told to do something, but aren't given the right tools to do it. (Errors inbound! (Ő︵Ő))

// We can imagine parameters as an imaginary variable that we use in a function to replicate our real data, that way we don't have to change the name of our variables
// Like in the examples above.

// If a function is used to find data from a dataset (our example of getting a sum from an array), we must return that data at the end of our function so our variable knows
// What value it needs to hold and store for future use
// For example, if a dog is trained to chase a ball, but not come back, it will never come back to you with the ball... and you have now lost a dog（>﹏<）
// Which is why you have to train it to return with a ball.
// (That also means you get your dog back! ʕ•ₒ•ʔ)

// To get started with creating a function, we use the function key word and give it a name, similar to our variables.
/*
    function name(parameters) { // We can leave the parameters empty if we don't need to give our function data
        
        Inside here is our block of code we don't want to repeat!

        Return your data here at the end so your variable knows what data it is!
    }
*/

// Creating a function that is getting a sum
function getSum(parameter) {
    let sum = 0 // This is our running total in the function

    // Algorithm to get the sum in the function
    for (let i = 0; i < parameter.length; i++) {
        const currentNumber = parameter[i]
        sum += currentNumber
    }

    // Once we have ran our algorithm, we need to return the value. This allows us to store the value we want into a variable for later use!
    return sum
}

// To call/invoke on a function, you must add the () to the end of the name of the function
// If the function requires a parameter, you must give it an argument.
// Arguments are what we pass to the function.

// Following our example from above with tools, when we are given the tools for the job, they may be different each time. Maybe these tools are better and newer than the last
// Basically, the tools given to us are the arguments (values passed into functions) and the parameters are the tools we asked for to do the job.

// Now lets repeat what we did earlier, but now with a function!
let firstArrayFunc = [5, 3, 2]
let firstSum2 = getSum(firstArrayFunc) // Because we have returned a value in the function, we are able to store and give our variable the sum value we get from the function

let secondArrayFunc = [10, 12, 6]
let secondSum2 = getSum(secondArrayFunc)

let thirdArrayFunc = [12, 4, 1, 2]
let thirdSum2 = getSum(thirdArrayFunc)

/*
    What are objects?

    Objects in JavaScript are also known as dictionaries, or hashmaps!
    Their main purpose is to hold a specific key pair being its name and its value.

    For example, my first name is Aaron; so the key pair for my first name would be:
    "firstName": "Aaron"

    They are also extremely fast, with a runtime of O(1). This means that no matter the size,
    we will always be able to retrieve our data in the same amount of time.

    Real world example:
    You always leave your car keys in the same spot when you get home. So when you need to find your
    car keys, you always go to the same spot and find them without fail. (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
*/

// Using objects, the basics:
// Lets start off with creating an object called "aaron" that will store my identity.

// object = {key: value}
let aaron = {"firstName": "Aaron"}

// As we can see, it only stores my first name. This isn't enough to find out who I am, and we need more information.
// To view or add a key pair to an object, we have a couple different options.

// Property accessor, this adds a last name to the object
// object[key] = value
aaron["lastName"] = "Nguyen"
// console.log(aaron["lastName"]) // Uncomment if you want to test console log

// Dot notation, this adds an age to the object
// **** DOES NOT WORK WITH INTEGERS **** (⋟﹏⋞)
// Example: aaron.21 = 21 does not work
// object.key = value
aaron.age = 21
// console.log(aaron.age) // Uncomment if you want to test console log

// Using objects, advanced:
// We can also store more than just a string and integer. To be precise, we can practically add anything we'd like as a value,
// Such as arrays, other dictionaries, and booleans.
// Now, continuing with our object, Aaron!

aaron.favoriteNumbers = [21, 11, 6]
aaron.job = {
    "Company": "Source Allies",
    "Description": "Team member",
    "Start-Date": "12/05/2022",
    21: true // 21 is a number, not a string! To access a key that is a number, you must use the property accessor! (aaron.job[21])
}

// To delete a keypair, all we have to do is call on the keyword "delete" and then our keypair
console.log(aaron)
delete aaron.job[21]
console.log(aaron)