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

    //let n = random(0, width);

    // get a noise value based on xoff and scale
    // it's according to the window's width
    //let n = noise(xoff) * random(0, height);

    //let o = noise(yoff) * random(0, width);

    xoff += xincrement;

    yoff += yincrement;



    fill(random(0, 10),random(0, 200),random(0, 200));

    size1 = random(0, 250);

    xposition = random(0, width);
    yposition = random(0, height)

    ellipse(xposition, yposition, size1 , size1);

    // 1st circle - different color & size 
    reduction1 = random(5,20);
    finalSize1 = size1 - reduction1;
    fill(random(0, 5),random(0, 100),random(0, 255));
    ellipse(xposition, yposition, finalSize1 , finalSize1);

    // 2nd circle - different color & smaller size 
    reduction2 = random(5,20);
    finalSize2 = finalSize1 - reduction2;
    fill(random(0, 5),random(0, 100),random(0, 255));
    ellipse(xposition, yposition, finalSize2 , finalSize2);

    // 3rd circle - different color & smaller size 
    reduction3 = random(5,20);
    finalSize3 = finalSize2 - reduction3;
    fill(random(0, 5),random(0, 100),random(0, 255));
    ellipse(xposition, yposition, finalSize3 , finalSize3);

    // 4th circle - different color & smaller size 
    reduction4 = random(5,20);
    finalSize4 = finalSize3 - reduction4;
    fill(random(0, 5),random(0, 100),random(0, 255));
    ellipse(xposition, yposition, finalSize4 , finalSize4);

    // 5th circle - different color & smaller size 
    reduction5 = random(5,20);
    finalSize5 = finalSize4 - reduction5;
    fill(random(0, 5),random(0, 100),random(0, 255));
    ellipse(xposition, yposition, finalSize5 , finalSize5);

 
}


