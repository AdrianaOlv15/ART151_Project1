let xoff = 0.1;
let xincrement = 5;

let yoff = 0.1;
let yincrement = 5;


function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
    noStroke();
}

function draw(){

    // create an alpha blended background
    fill(0,10);
    rect(0,0,width, height);

    xoff += xincrement;
    yoff += yincrement;

    // color of the circles
    //let myColor = color(92, 255, 228);
    let myColor = color(0, random(0,200), random(0,200));

    // range of sizes for the circles
    nextSize = random(100, 200);

    // random postion of circle
    xposition = random(0, width);
    yposition = random(0, height)

    // 1st circle - color
    fill(myColor);
    ellipse(xposition, yposition, nextSize , nextSize); //100

    // smaller circle inside
    for (let i = 0; i < 50; i++){

        let myColor = color(0, random(0,200), random(0,200));

        // calculate smaller circle size
            nextSize = nextSize - nextSize/10;
        // alternate colors
            if ( (i%2) == 0 ) { fill(0,0,0); }
            else { fill(myColor); }
        // draw circle
            frameRate(15);
            ellipse(xposition, yposition, nextSize , nextSize);
    }   
}


