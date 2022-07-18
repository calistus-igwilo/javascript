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
const tax = 1.2;

// Implement getPrices()
function getPrices(dishData) {
    for (item of dishData) {
        finalPrice = item.price * tax;
        console.log(`Dish: ${item.name} Price: $${finalPrice}`);
        //console.log(`${dishName}: ${dishPrice}`);
    }
}
getPrices(dishData);

// Using map function
function getPrices(dishData) {
    dishData.map((dish) => {
        console.log(`Dish: ${dish.name} Price: $${dish.price * tax}`);
    });
}
getPrices(dishData);