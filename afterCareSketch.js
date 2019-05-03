var closeButton, windowImg, windowCount;
var afterCare2, afterCare3;

let h = document.body.clientHeight;
let w = document.body.clientWidth;

let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;


function preload() {

    // closeButton = loadImage('assets/window_close.png');
    // windowImg = loadImage('assets/window.png');
    windowCount = 0;
    afterCare2 = false;

}

function setup() {

    bx = w / 2.
    by = h / 2;
    rectMode(RADIUS);
    strokeWeight(2);

    createCanvas(windowWidth - windowWidth * 0.05, windowHeight - windowHeight * 0.1);
    windowCount = 0;

    for (var i = 2; i < 20; i++) {
        var div = document.getElementById('window1');
        var acDiv = document.getElementById('afterCare1');
        clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
        clone.id = "window" + i;
        acDiv.appendChild(clone);
        var newDiv = document.getElementById(clone.id);
        var posx = random(-1000, 300);
        var posy = random(350);
        var s = select(clone.id);
        select('#window' + i).style('margin-top', posy + 'px');
        select('#window' + i).style('margin-left', posx + 'px');
        windowCount++;
        // select('#window' + i).style('display','inline-block');
    }


    //    for(var i = 2; i < 8; i++){
    //      var div = document.getElementById('window1'),
    //      clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    //      clone.id = "window" + i;
    //      document.body.appendChild(clone);
    //      var w1 = image(windowImg,0,400,250);
    //      var c1 = image(closeButton,330,15,50,50);
    //      document.clone.appendChild(w1);
    //      document.clone.appendChild(c1);
    // }


}

function draw() {
    // background(0, 0, 0);
    $('.c1').unbind().click(function() {
        windowCount--;
        $(this).parent().fadeOut();

    });

    if (windowCount <= -1) {
        // console.log("You are done");
        $('#afterCare1').fadeOut(1000);
        $('#afterCare2').fadeIn(1500);
        afterCare2 = true;
        $("#afterCare2Btn").delay( 20000 ).fadeIn( 400 );
        // $("#afterCare2Btn").fadeIn(400);

    }

    if (afterCare2 == true) {
        if (keyIsPressed == true) {
            var rand = random(100);
            if (rand > 50) {
                fill(136, 128, 195, random(100, 255));
                console.log("is blue");
            } else {
                fill(208, 71, 71, random(100, 255));
                console.log("is red");
            }
            textSize(random(50));
            text(randomString(), random(w), random(200, h));
        }
        fill(random(255), random(0, 100));
        textSize(random(30));
        text(randomString(), random(w), random(200, h));
        text(randomString(), random(w), random(200, h));
        text(randomString(), random(w), random(200, h));
        text(randomString(), random(w), random(200, h));
    }

    if (afterCare3 == true) {
        $("#afterCare3Btn").delay( 20000 ).fadeIn( 400 );
        if (mouseIsPressed == true) {
            bx = mouseX;
            by = mouseY;
            noStroke();
            fill(208, 71, 71, 2);
            ellipse(bx, by, 100);
            if (mouseReleased()) {
                // ellipse(bx,by, 100);
            }
        }

    }

    if(afterCare4 == true){
        
    }

}


function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 1;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
}

function afterCare3() {
    background(0, 0, 0);
    afterCare3 = true;
    afterCare2 = false;
    windowCount = 100;
    $('#afterCare2').fadeOut(1000);
    $('#afterCare3').fadeIn(1500);
}

function afterCare3() {
    background(0, 0, 0);
    afterCare3 = true;
    afterCare2 = false;
    windowCount = 100;
    $('#afterCare2').fadeOut(1000);
    $('#afterCare3').fadeIn(1500);
}

function afterCare4(){
    afterCare3 = false;
    afterCare4 = true;
    $('#afterCare3').fadeOut(1000);
    $('#afterCare4').fadeIn(1500);
    $('#afterCare4Btn').delay( 1000 ).fadeIn(3000);
    background(0,0,0);
}

function mousePressed() {
}

function mouseDragged() {}

function mouseReleased() {}

function toFinal(){
   window.location.href = 'reset.html';
}