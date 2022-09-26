let xoff = 0.1;
let xincrement = 5;

let yoff = 0.1;
let yincrement = 5;

let backColor = 0;
let frontColor = 0;

let count = 0; 
let count2 = 0;

let xposition;
let yposition;

let x = 320;
let y = 180;

let xspeed = 10;
let yspeed = 5;

let r = 5;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(backColor);
    noStroke();
}


function drawCircle (myColor, myColor2, xposition, yposition, nextSize , nextSize ){
    fill(myColor);
    noStroke();
    ellipse(xposition, yposition, nextSize , nextSize); //100

    // smaller circle inside
    for (let i = 0; i < 11; i++){
        noStroke();
        // calculate smaller circle size
            nextSize = nextSize - nextSize/10;
        // alternate colors
            if ( (i%2) == 0 ) { fill(myColor2); }
            else { fill(myColor); }
        // draw circle
            frameRate(15);
            noStroke();
            ellipse(xposition, yposition, nextSize , nextSize);
    } 
}

function draw(){

    fill(255)
    ellipse(x, y, r*2, r*2);
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
        xspeed = -xspeed;
    }
    if (y > height - r || y < r) {
        yspeed = -yspeed;
    }

    // create an alpha blended background
    if (mouseIsPressed === true && mouseX > width*0.47 && mouseX < width*0.53 && mouseY > height*0.47 && mouseY < height*0.53) {
        fill(0);
        rect(0, 0, width, height);
        count++;        
    }

    if (count%3 == 0) {
        frontColor = color(0, random(0,255), random(0,255));
    } else if (count%3 == 1) {
        frontColor = color(random(200,255), random(0,255), 0);
    }else if (count%3 == 2) {
        frontColor = color(random(200,255), 0, random(0,255));
    }     

    fill(backColor,10);
    rect(0,0,width, height);

    xoff += xincrement;
    yoff += yincrement;

    // color of the circles
    //let myColor = color(92, 255, 228);
    let myColor = color(frontColor);
    let myColor2 =  color(backColor);

    // range of sizes for the circles
    nextSize = random(50, 100);
    
    // random postion of circle
    //xposition = random(0, width * 0.4);
    //yposition = random(0, height)

    section = Math.floor(Math.random() * 101);

    console.log("section = ", section%4);

    xposition = random(0, width); // right
    yposition = random(0, height);

    while (xposition < width * 0.7 && xposition > width * 0.3 && yposition < height*0.7 && yposition > height*0.3){
        xposition = random(0, width); 
        yposition = random(0, height);
    }
    
    

    // draw circle 
    drawCircle (myColor, myColor2, xposition, yposition, nextSize , nextSize );
    drawCircle (0, 0, width*0.5, height*0.5, 150 , 150);

    let nextC = 0;

    if ((count+1)%3 == 0) {
        nextC = color(0, random(0,190), random(0,225));
    } else if ((count+1)%3 == 1) {
        nextC = color(random(0,190), random(0,225), 0);

    } else if ((count+1)%3 == 2) {
        nextC = color(random(0,190), 0, random(0,225));
    } 

    let newSize = random(50,50);
    drawCircle (nextC, myColor2, width*0.5, height*0.5, newSize, newSize);
}


