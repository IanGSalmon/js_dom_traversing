const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');

// make button listen for click, use input to change h1 color
myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
})

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = 'purple';
}

// turn certain elements red, assigned tag name in html file
//const errorNotPurple = document.getElementsByClassName('error-not-purple');
const errorNotPurple = document.querySelectorAll('.error-not-purple');


for (let i = 0; i < errorNotPurple.length; i += 1) {
    errorNotPurple[i].style.color = 'red';
}

// create zebra striping in backgrounds of list items
const evens = document.querySelectorAll('li:nth-child(even)');


for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.backgroundColor = 'lightgray';
}