let walkingSpeed = 0.5;
let noiseSpeed = 0.4 * walkingSpeed;
let dirIncr = 0.01 * walkingSpeed;

let changeChance = 0.05 * walkingSpeed;
let angleChance = 0.01 * walkingSpeed;

let ribbonWidth = 50;

let angleIncr = 0.01 * walkingSpeed;

let noiseScale = 0.02;
let noiseHeight = 200;

let hueShift = 0.001 * walkingSpeed;

let steps = 0;
let stepsPerFrame = 20;
let maxSteps = 5000;

let numRibbons = 5;

class Walker {
    constructor(x, y, hue) {
        this.x = x;
        this.y = y;
        this.z = 0;
        this.dir = random(TAU);
        this.dirMod = random() < 0.5 ? 1 : -1;
        this.angleMod = random() < 0.5 ? 1 : -1;
        this.angle = random(-PI, PI);
        this.hue = hue;
        this.hueMod = 0;
    }
    update() {
        this.x += cos(this.dir) * walkingSpeed;
        this.y += sin(this.dir) * walkingSpeed;
        this.dir += this.dirMod * dirIncr;
        if (random() < changeChance) {
            this.dirMod = random() < 0.5 ? 1 : -1;
        }
        if (random() < angleChance) {
            this.angleMod = random() < 0.5 ? 1 : -1;
        }

        this.hueMod += random(-hueShift, hueShift);
        this.hueMod = constrain(this.hueMod, -0.1, 0.1);

        this.angle += this.angleMod * angleIncr;
        this.angle = constrain(this.angle, -PI, PI);
        this.z += noiseSpeed;
    }
    render() {
        let hue = this.hue + this.hueMod;
        if (hue < 0) hue += 1;
        if (hue > 1) hue -= 1;
        push();
        translate(this.x, this.y);
        rotate(this.angle + this.dir);
        translate(0, -ribbonWidth / 2);
        beginShape();
        stroke(hue, 1, 1, walkingSpeed / 10);
        // strokeWeight(walkingSpeed/10);
        noFill();
        for (let i = 0; i < ribbonWidth; i++) {
            let n = noise(i * noiseScale, this.z * noiseScale);
            n -= 0.5;
            n *= noiseHeight;
            vertex(n, i);
        }
        endShape();
        pop();
    }
}

function setup() {
    pixelDensity(1);
    createCanvas();
    blendMode(ADD);
    colorMode(HSB, 1, 1, 1);
    windowResized();
}

let walkers;

function init() {
    clear();
    background(0.2);
    steps = 0;
    walkers = [];

    let hue = random();
    for (let i = 0; i < numRibbons; i++) {
        walkers.push(
            new Walker(random(width), random(height), hue + random(-0.1, 0.1))
        );
    }
}

function draw() {
    if (steps < maxSteps) {
        for (let i = 0; i < stepsPerFrame; i++) {
            walkers.map((w) => {
                w.update();
                w.render();
            });
            steps++;
        }
    }
}

function mousePressed() {
    init();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    init();
}
