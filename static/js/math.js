let time = 0;
let wave = [];
let numCirc;
let speed;
let col = 0;

function setup() {
    let canvas = createCanvas(800, 400);
    numCirc = createSlider(1, 100, 1, 1);
    speed = createSlider(0.01, 3, 0.01, 0.01);
    canvas.parent("fourier");
    numCirc.parent("fourier");
    speed.parent("fourier");
}

function draw() {
    background(0);
    translate(250, 200);

    let x = 0;
    let y = 0;
    for (let i=0; i<numCirc.value(); i++) {
        col = random(255);

        let prevX = x;
        let prevY = y;
        let n = i*2 + 1;
        
        let radius = 80*(4/(n*PI));
        x += radius*cos(n*time);
        y += radius*sin(n*time);

        stroke(255, 150);
        noFill();
        ellipse(prevX, prevY, radius*2);

        //fill(255);
        stroke(200, col, 200);
        line(prevX, prevY, x, y);
        //ellipse(x, y, 10);
    }

    wave.unshift(y);
    translate(210, 0);
    line(x-210, y, 0, wave[0]);

    beginShape();
    noFill();
    for (let i=0; i<wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    if (wave.lenght > 150) {
        wave.pop();
    }

    time += speed.value();
}