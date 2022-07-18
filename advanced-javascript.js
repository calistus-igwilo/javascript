//De-sturctuing Objects and Arrays
let { PI } = Math; //Makes a copy of Math.PI and store it in PI. The variable name must match the property
console.log(PI); //3.141592653589793

// Loop over Object's properties (key or value)
var clothingItem = {
    price: 50,
    color: "beige",
    material: "cotton",
    season: "autumn",
};

for (key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key]);
}

//##################################################
const car4 = {
    speed: 400,
    color: "magenta",
};
console.log(Object.entries(car4)); //[ [ 'speed', 400 ], [ 'color', 'magenta' ] ]

//Access Object member using bracket notation
function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

    var drone = {
        speed: 15,
        color: "orange",
    };

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

var dairy = [
    "cheese",
    "sour cream",
    "milk",
    "yogurt",
    "ice cream",
    "milkshake",
];

function logDairy() {
    for (let i = 0; i < dairy.length; i++) {
        console.log(dairy[i]);
    }
}

//#############################################
// Task 1
/* function logDairy(arr) {
    for (item of arr) {
        console.log(item)
    }
}

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

logDairy(dairy)

// Task 2:  for ... of
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(obj) {
    for (key of Object.keys(obj)) {
        console.log(key, ":", obj[key]);
    }
}
birdCan(bird);

// Task 3  for ... in
function animalCan(obj) {
    for (prop in obj) {
        console.log(prop, ":", obj[prop]);
    }
}
animalCan(bird);
 */

//#################################################
// submited to grader with 100% score:

// Task 1

function logDairy() {
    var dairy = [
        "cheese",
        "sour cream",
        "milk",
        "yogurt",
        "ice cream",
        "milkshake",
    ];
    for (item of dairy) {
        console.log(item);
    }
}
logDairy();

// Task 2
const animal2 = {
    canJump: true,
};

const bird2 = Object.create(animal2);

bird2.canFly = true;

bird2.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird2)) {
        console.log(key + ": " + bird2[key]);
    }
}
birdCan();

// Task 3
function animalCan() {
    for (prop in bird2) {
        console.log(prop + ": " + bird2[prop]);
    }
}
animalCan();

//###############################################
// forEach
const fruits = ["kiwi", "mango", "apple", "pear"];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

//###########################################
// filter
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function(num) {
    return num > 20;
});

//###########################################
// map  (allows keys of anytype, the main difference from Objects
let map = new Map();
let x = [0, 10, 20, 30, 40, 50].map(function(num) {
    return num / 10;
});
console.log(x);
// result:  [0, 1, 2, 3, 4, 5]

//###########################################
const result = [];
const drone = {
    speed: 100,
    color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key) {
    result.push(key, drone[key]);
});
console.log(result);
// result: ['speed', 100, 'color', 'yellow'

//#########################################
// Working with Map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// result: Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1); // 'The Champion'

//###################################
// set
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
// result:  Set(3) { 'apple', 'pear', 'plum' }

//#######################################
// spread
//
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // [ 1, 2, 3, 4, 5, 6 ]

//##############################
// rest

//Assign the first and second items from numbers to variables and
//put the rest in an array:
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(one); // 1
console.log(two); // 2
console.log(rest); // [ 3, 4, 5, 6 ]

//#########################################
// Working with spread and rest

// add objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}

// add new members to an array
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies); // [ 'onion', 'parsley', 'carrot', 'beetroot' ]

// convert a string to an array using spread
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//
const meal = ["soup", "steak", "ice cream"];
let [starter] = meal;
console.log(starter); // soup

//####################
const dishData = [{
        name: "Italian pasta",
        price: 9.55,
    },
    {
        name: "Rice with veggies",
        price: 8.65,
    },
    {
        name: "Chicken with potatoes",
        price: 15.55,
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45,
    },
];

for (item of dishData) {
    let finalPrice;
    let name = Object.values(item)[0];
    let price = Object.values(item)[1];

    //console.log(`${name}: ${price}`);
}
//console.log(typeof(dishData)){}}[
//##############################################

// Given code
const dishData = [{
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (item of dishData) {
        var finalPrice;
        let dishName = Object.values(item)[0];
        let dishPrice = Object.values(item)[1];
        if (taxBoolean) {
            finalPrice = dishPrice * tax;
        } else if (taxBoolean == false) {
            finalPrice = dishPrice;
        } else {
            console.log("You need to pass a boolean to the getPrice call!");
            return
        }
        console.log(`Dish: ${dishName} Price: $${finalPrice}`)

    }
}



// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof(guests) == "number" && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        }
        if (guests >= 5) {
            discount = 10

        }
        console.log("Discount is: $" + discount);
    } else {
        console.log("The second argument must be a number between 0 and 30")
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10)




//##############################################
let c = false;
if (c == "false") {
    console.log(c + " is a number");
} else {
    console.log(c + "is not a number");
}
console.log(c.length);

var d = 0 != 1;
console.log(d);
console.log("d is: " + typeof d);

console.log(xy);
var xy = 2;