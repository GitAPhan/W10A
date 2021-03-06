// function to add '!' when button is clicked
function addTextNode(text) {
    var newtext = document.createTextNode(text);
    var store_name = document.getElementById('store_name');
    store_name.appendChild(newtext);
}

// set to be in the background and fill viewport
var image = document.querySelector('img');
image.style.width = '100vw';
image.style.height = '100vh';
image.style.position = 'fixed';
image.style.zIndex = '-1';
image.style.left = '0';

// changed the font size and weight of all p tags
var text = document.querySelectorAll('p');
for (var i = 0; i < text.length; i++) {
    text[i].style.fontSize = '13px';
    text[i].style.fontWeight = 'bold';
}

// italicized the p text with id=caption
var caption = document.getElementById('caption')
caption.style.fontStyle = 'italic';

// disabled all a tags clicking ability
var disable_click = document.getElementsByTagName('a');
for (i = 0; i < disable_click.length; i++) {
    disable_click[i].style.pointerEvents = 'none';
}

// create and add new a tag in body
var new_link = document.createElement('a');
document.body.append(new_link);
new_link.innerText = 'Hey There!';
new_link.href = '#';

// assigned the a tag a class
new_link.className = 'blue';

// changed all blue classes to red
var blue_class = document.getElementsByClassName('blue');
// did not add counter because when the class is replaced the element is removed from list
for (i = 0; i < blue_class.length;) {
    blue_class[i].classList.replace('blue','red');
}

// added red class to store_name
var store_name = document.getElementById('store_name');
store_name.classList.add('red');

// took all elements with class 'animate_me' and toggled red
var lets_make_everything_red = document.getElementsByClassName('animate_me');
for (i=0; i<lets_make_everything_red.length;i++) {
    lets_make_everything_red[i].classList.toggle('red');
}


// changed all red classes to red text
var red_text = document.getElementsByClassName('red');
for (i = 0; i < red_text.length; i++) {
    red_text[i].style.color = 'red';
}

// removed an unnecessary tag
var useless_tag = document.getElementsByClassName('bold');
for (i=0; i<useless_tag.length;) {
useless_tag[i].classList.remove('bold');
}

// can't be my project if there is not an absorbant amount of red.
// removed the last element that isn't red
document.body.removeChild(document.body.children[0]);
