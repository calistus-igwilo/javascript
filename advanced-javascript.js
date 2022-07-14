//De-sturctuing Objects and Arrays
let { PI } = Math //Makes a copy of Math.PI and store it in PI. The variable name must match the property
console.log(PI) //3.141592653589793

// Loop over Object's properties (key or value)
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

//##################################################
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ [ 'speed', 400 ], [ 'color', 'magenta' ] ]


//Access Object member using bracket notation
function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();


var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (let i = 0; i < dairy.length; i++) {
        console.log(dairy[i])
    }
}


//#############################################
// Task 1
function logDairy(arr) {
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