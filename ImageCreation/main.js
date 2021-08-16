var image = document.querySelector('canvas');
var context = image.getContext('2d');

// head
context.fillStyle = 'darkgreen';
context.fillRect(200, 50, 350, 300);

// eyes
context.fillStyle = 'black';
context.fillRect(250, 110, 90, 90);
context.fillRect(410, 110, 90, 90);

// nose
context.fillRect(340, 200, 70, 100);

// mouth
context.fillRect(300, 240, 40, 110);
context.fillRect(410, 240, 40, 110);