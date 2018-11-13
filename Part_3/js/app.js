const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

listDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
    }
});


listDiv.addEventListener('mouseout', () => {
    if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
    }
});


//Looping through each list item
//Doesn't work if user adds new item
//See above to assign handler to ancestor

/*
for (let i = 0; i < listItems.length; i += 1) {
listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
});
}

for (let i = 0; i < listItems.length; i+= 1) {
listItems[i].addEventListener('mouseout', () => {
    listItems[[i]].textContent = listItems[i].textContent.toLowerCase();
});
}
*/

toggleList.addEventListener('click', () => {
    if (listDiv.style.display === 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';

    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

/*
button.addEventListener('click', () => {
    p.textContent = input.value + ':';
});
*/

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
})

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
    addItemInput.value = '';
})