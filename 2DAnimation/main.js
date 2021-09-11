const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let planets = [];
let stars = [];

function init() {

    planets.push(getPlanet(40, 0, 0, 0, 'rgb(255,215,0)')); // sun
    planets.push(getPlanet(7, 5, 95, 60, 'rgb(218,165,32)')); // mercury
    planets.push(getPlanet(15, 4, 125, 80, 'rgb(244,164,96)')); // venus
    planets.push(getPlanet(19, 3, 175, 115, 'rgb(0,0,128)')); // earth
    planets.push(getPlanet(13, 3.5, 225, 150, 'rgb(128,0,0)')); // mars
    planets.push(getPlanet(30, 3, 275, 200, 'rgb(205,133,63)')); // jupiter
    planets.push(getPlanet(25, 2.5, 350, 250, 'rgb(222,184,135)')); // saturn
    planets.push(getPlanet(23, 2, 400, 300, 'rgb(176,224,230)')); // uranus
    planets.push(getPlanet(22, 1.5, 475, 350, 'rgb(216,191,216)')); // neptune

    for (let i = 0; i < 1000; i++) {
        stars.push(new Star());
    }

}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.draw();
    });

    planets.forEach(planet => {
        planet.update();
    });
}

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.25;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 1.25, false);
        context.fillStyle = 'rgb(255, 255, 255)';
        context.fill();
    }
}

class Planet {
    constructor(x, y, radius, color, velocity, orbitRadiusX, orbitRadiusY) {
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.radian = 0;
        this.orbitRadiusX = orbitRadiusX;
        this.orbitRadiusY = orbitRadiusY;
    }

    draw() {
        // Planet Path
        context.beginPath();
        context.lineWidth = 1;
        context.ellipse(this.startX, this.startY, this.orbitRadiusX, this.orbitRadiusY, Math.PI * 2, 0, Math.PI * 4);
        context.strokeStyle = 'rgba(255, 255, 255, 0.10)';
        context.stroke();

        // Planet
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    update() {
        this.draw();
        if (this.velocity > 0) {
            this.radian += this.velocity;
            this.x = this.startX + Math.cos(this.radian) * this.orbitRadiusX;
            this.y = this.startY + Math.sin(this.radian) * this.orbitRadiusY;
        }
    }
}

const getPlanet = (radius, velocity, orbitRadiusX, orbitRadiusY, color) =>
    new Planet(
        canvas.width / 2,
        canvas.height / 2,
        radius,
        color,
        velocity / 1000,
        orbitRadiusX,
        orbitRadiusY
    );

init();
animate();