//creates query selector for main variables
function $(selector){
	return document.querySelector(selector);
}

const toggleList		    = $('#toggleList');
const listDiv			      = $('.list');
const descriptionInput	= $('input.description');
const descriptionP		  = $('p.description');
const descriptionButton	= $('button.description');
const listUl			      = listDiv.querySelector('ul');
const addItemInput		  = $('input.addItemInput');
const addItemButton		  = $('button.addItemButton');
const lis				        = listUl.children;


// creates button with class name and text content
function createBtn(cls, txt) {
	let btn 			    = document.createElement('button');
		btn.className 	= cls;
		btn.textContent = txt;
	return btn;
}

//hides button
function hide(btn){
	btn.style.visibility = 'hidden'
}

//shows button
function show(btn){
	btn.style.visibility = 'visible'
}

// adds buttons to list items created by HTML
function attachListItemButtons(li) {
	let up 	   = createBtn('up', 'Up');
	let down   = createBtn('down', 'Down');
	let remove = createBtn('remove', 'Remove');

	li.appendChild(up);
	if ( listUl.firstElementChild != li ) {
		show(up);
	} else if ( listUl.firstElementChild == li ) {
		hide(up);
	}
	li.appendChild(down);
	if ( listUl.lastElementChild != li ) {
		show(down);
	} else if ( listUl.lastElementChild == li ) {
    	hide(down);
  	}
	li.appendChild(remove);
}

//adds or removes up and down buttons when list item is moved, added or removed
function addRemoveButton() {
	for (let i = 0, j=lis.length; i<j; i++) {
		let up 	 = lis[i].querySelector('.up');
		let down = lis[i].querySelector('.down');
		if (lis[i] == listUl.lastElementChild && lis[i] == listUl.firstElementChild) {
        	hide(down);
			hide(up);
    	} else if (lis[i] == listUl.firstElementChild) {
        	hide(up);
			show(down);
		} else if (lis[i] == listUl.lastElementChild) {
        	hide(down);
			show(up);
    	} else {
        	show(up);
			show(down);
      	}
    }
}

//iterates through HTML list items
for (let i=0, j=lis.length; i<j; i++){
	attachListItemButtons(lis[i]);
}

// removes list item or moves it up or down
listUl.addEventListener('click', (event) => {
	let target = event.target;
	let tag		 = target.tagName.toUpperCase();
	let cls		 = target.className;
	let li		 = target.parentNode;
	let ul		 = li.parentNode;
	let prevLi = li.previousElementSibling;
	let nextLi = li.nextElementSibling;

	if ('BUTTON' == tag) {
		if ('remove' == cls) {
			ul.removeChild(li);
		} else if ('up' == cls) {
			if (prevLi) {
				ul.insertBefore(li, prevLi);
			} if ( li.querySelector('.down').style.visibility == 'hidden' ) {
				show(li.querySelector('.down'));
			}
		} else if ('down' == cls) {
			if (nextLi) {
				ul.insertBefore(nextLi, li);
			} if ( li.querySelector('.up').style.visibility == 'hidden' ) {
	  			show(li.querySelector('.up'));
  			}
		}
	}
	addRemoveButton()
});

//hides and shows the list section
toggleList.addEventListener ('click', () => {
	if (listDiv.style.display === 'none') {
		toggleList.textContent = 'Hide List';
		listDiv.style.display = 'block';
	} else {
		toggleList.textContent = 'Show List';
		listDiv.style.display = 'none';
	}
});

// changes the title of the list
descriptionButton.addEventListener ('click', () => {
	descriptionP.textContent = descriptionInput.value + ':';
	descriptionInput.value = '';
});

// adds items to list and sets up/down buttons correctly
addItemButton.addEventListener ('click', () => {
	let ul = document.getElementsByTagName ('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	attachListItemButtons(li);
	ul.appendChild(li);
	addRemoveButton()
	addItemInput.value = '';
});
