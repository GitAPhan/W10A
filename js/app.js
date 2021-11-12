

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

