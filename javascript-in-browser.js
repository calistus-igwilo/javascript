// Script to create an input field. Typing into the input field and 
// hitting enter will display the text on the browser 

/* var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
}); */


// Add an eventlistener to h1 element that replaces its text with
// elements from an array each time it is clicked.

/* var h1 = document.querySelector('h1');
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];

function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}

h1.addEventListener('click', handleClicks) */


//############################################
// json
const jsonStr = '{ "greeting": "hello" }'; // a json string
JSON.parse(jsonStr); // {greeting: 'hello'}  convert json string to a json object
const aPlainObj = JSON.parse(jsonStr); // assign the json object to a variable

// test the object property
aPlainObj.greeting = 'hi'
console.log(aPlainObj) //{ greeting: 'hi' }  it changed the value of greeting

// convert a json object to json string
const data = {
    firstName: "Calis",
    lastName: "Igwilo",
    greeting: "Hello",
}
const jsonStr2 = JSON.stringify(data)
console.log(jsonStr2) //{"firstName":"Calis","lastName":"Igwilo","greeting":"Hello"}