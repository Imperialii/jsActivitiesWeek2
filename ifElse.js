// == means equals to which comapres values and doesnt care about data types
// if(10 == "10"){
//    console.log(true);
// } else {
//    console.log(false);
// }

// === means strictly equals which comapres data types and values
// if(10 === "10"){
//    console.log(true);
// } else {
//    console.log(false);
// }

// Modulo operator gives back a remainder from a division
// in this case 12 is divisible by 2 so would give 0 and pass the if statement
// logging "this is even"
// if(12%2 === 0){
//    console.log("this is even");
// } else {
//    console.log("this is odd");
// }

// Activity 1

//let age = 21;
//let country = "United States";

//if (age > 20 && country == `United States`) {
//    console.log('Yeah, I can serve you.')
//} else {
//    console.log(`Nope, get out of here.`)
//}

// Activity 2

// let topping = "Pineapple";
// let topping = "Ham";
//let topping = "Olives";

//switch(topping){
//    case "Ham":
//    case "Pineapple":
//        console.log(`Pineapple and Ham are important ingredients for my pizza.`);
//        break;
//    case "Olives":
//        console.log(`I really hate ${topping} on my Pizza.`);
//}

// Activity 3

//let password = "apples"
let password = "eighties"

switch (true) {
    case password >= 8:
        console.log (`${password}`);
        break;
}