const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const balls = [];
const fundoImg = new Image();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function init() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fundo();
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.animate();
    }
    requestAnimationFrame(init);
}

class Circle {

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    };

    dx = Math.floor(Math.random() * 2) + 1;
    dy = Math.floor(Math.random() * 2) + 1;

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    animate() {

        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.draw();

    }
}


for (let i = 0; i < 75; i++) {
    let radius = Math.floor(Math.random() * 30) + 15;
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    var color = 'purple';
    balls.push(new Circle(x, y, radius, color));
}

canvas.addEventListener('click', function (e) {
    init();
});

function fundo() {
    fundoImg.src = "fundo.jpg";
    context.drawImage(fundoImg, 0, 0);
}