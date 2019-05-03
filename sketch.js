
// window.location.replace("http://www.yahoo.com"); 
var touchSize, touchSize2, touchSize3, touchSize4;
var dir,dir2,dir3,dir4;
var page2, page3, page5, page6, final;
var firstPress;
var circDiam;
let capture;
var circDir;
function preload(){

}

function setup() {


  circDiam = 0;
  circDir = 1;
  firstPress = false;
  let h = document.body.clientHeight;
  let w = document.body.clientWidth;
  createCanvas(windowWidth-windowWidth*0.05,windowHeight-windowHeight*0.1);
  page2 = false;
  page3 = false;
  touchSize = 100;
  touchSize2 = 15;
  touchSize3 = 40;
  touchSize4 = 70;
  dir = 1;
  dir2 = 1;
  dir3 = 1;
  dir4 = 1;

  pressed = false;
  pressed2 = false;
  pressed3 = false;
  pressed4 = false;
  page5 = false;
  page6 = false;
  final = false;

  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw(){ 
  if(page2 == true){
    background(0,0,0);
    fill(0,0,0);
    strokeWeight(10);

    if(pressed == false){
      stroke(255,255,255,touchSize);
    }
    else{
      stroke(138,126,195);
    }
    ellipse(75, 75, touchSize);
    if(touchSize == 100 || touchSize == 0){
      dir = dir * -1;
    }
    touchSize += dir;

    if(pressed2 == false){
      stroke(255,255,255,touchSize2);
    }
    else{
      stroke(138,126,195);
    }

    ellipse(75, document.body.clientHeight-150, touchSize2);
    if(touchSize2 == 100 || touchSize2 == 0){
      dir2 = dir2 * -1;
    }
    touchSize2 += dir2;

    if(pressed3 == false){
      stroke(255,255,255,touchSize3);
    }
    else{
      stroke(138,126,195);
    }

    ellipse(document.body.clientWidth-150, 75, touchSize3);
    if(touchSize3 == 100 || touchSize3 == 0){
      dir3 = dir3 * -1;
    }
    touchSize3 += dir3;

    if(pressed4 == false){
      stroke(255,255,255,touchSize4);
    }
    else{
      stroke(138,126,195);
    }

    ellipse(document.body.clientWidth-150, document.body.clientHeight-150, touchSize4);
    if(touchSize4 == 100 || touchSize4 == 0){
      dir4 = dir4 * -1;
    }
    touchSize4 += dir4;


    //top left
    if(mouseIsPressed && mouseX > 0 && mouseX < document.body.clientWidth/2 && mouseY > 0 && mouseY < document.body.clientHeight/2){
        if(pressed == false){
          pressed = true;
        }
        // else{
        //   pressed = true;
        // }
      }
    //bottom left
      if(mouseIsPressed && mouseX > 0 && mouseX < document.body.clientWidth/2 && mouseY > document.body.clientHeight/2 && mouseY < document.body.clientHeight){
        if(pressed2 == false){
          pressed2 = true;
        }
        // else{
        //   pressed2 = false;
        // }
      }

    //top right
    if(mouseIsPressed && mouseX > document.body.clientWidth/2 && mouseX < document.body.clientWidth && mouseY > 0 && mouseY < document.body.clientHeight/2){
        if(pressed3 == false){
          pressed3 = true;
        }
        // else{
        //   pressed3 = false;
        // }
      }
    //bottom left
      if(mouseIsPressed && mouseX > document.body.clientWidth/2 && mouseX < document.body.clientWidth && mouseY > document.body.clientHeight/2 && mouseY < document.body.clientHeight){
        if(pressed4 == false){
          pressed4 = true;
        }
        // else{
        //   pressed4 = false;
        // }
      }

      if(pressed == true && pressed2 == true && pressed3 == true && pressed4 == true){
         // $("#button1").css("display", "inline");
         $("#button1").delay( 200 ).fadeIn( 400 );

      }

    }

    if(page3 == true){
      background(0,0,0);
    }

    if(final == true){
      const urlVal = url.value();
      internetFin(urlVal);
    }

    if(greet == true){
        url = window.location.href;
        const name = input.value();
        // $.post(url,name,function(data,status){
        //   console.log(`${data} and status is ${status}`)
        // });

        // print("here");
        // for (let i = 0; i < 200; i++) {
        // push();
        // fill(random(255), random(255), random(255),255);
        // translate(random(100), random(100));
        // rotate(random(random(0,5) * PI));
        // textFont('space Mono')
        // textSize(50);
        // text(name, i*i, 200 +(i*30));
        // pop();
        // }
        step6(name);
    }

    if(page6 == true){
      page2 = false;
      page3 = false;
      page5 = false;
      image(capture, 100, 300, 550, 390);
      $("#page5 h1").css("display","none");
      if(mouseIsPressed){
        fill(255);
        stroke(255);
        strokeWeight(3);
        line(mouseX, mouseY, pmouseX, pmouseY);
      }
    }

    if(page4 == true){
      if(mouseIsPressed == true){
        // $("#specialButton").delay( 20000 ).fadeIn( 400 );
        $("#specialButton").fadeIn();
        $("#page3 img").css("opacity","0");
        stroke(255,168,168);
        strokeWeight(10);
        noFill();
        ellipse(mouseX, mouseY, circDiam);
        console.log(circDir);
        if(circDir == -1){
          circDiam-=0.5;
          noStroke();
          fill(255,168,168);
          textSize(30);
          textFont('Space Mono');
          textAlign(CENTER);
          text('Breathe Out',mouseX, mouseY+200);
        }
        else{
          circDiam+=0.5;
          if(circDiam < 150){
            noStroke();
            fill(255,168,168);
            textAlign(CENTER);
            textFont('Space Mono');
            textSize(30);
            text('Breathe in',mouseX, mouseY+200);
            }
        }
        if(circDiam > 350 || circDiam < 0){
           circDir = circDir * -1;
        }
        if(circDiam < 0){
          circDiam = 0;
        }
        else if (circDiam > 350){
          circDiam = 350;
        }
        if(circDiam > 150 && circDir == 1){
          noStroke();
          fill(255,168,168);
          textAlign(CENTER);
          textSize(30);
          textFont('Space Mono');
          text('Hold breath',mouseX, mouseY+200);
        }
      }
      else{
        stroke(255,168,168);
        strokeWeight(10);
        noFill();
        ellipse(mouseX, mouseY, circDiam);
      }
    }

  }

function myInputEvent() {
  console.log('you are typing: ', this.value());
}


function step2() {
    $("#page1").css('display','none');
    $("#page2").fadeIn(1500);
    page2 = true;
}

function step3() {
    $("#page2").fadeOut(1000);
    $("#page3").fadeIn(1500);
    page2 = false;
    page3 = true;
}

function step4() {
      $("#page3 h1").text('Let\'s practice');
      $("#page3 p").text('Try to imagine the loading icon is instead prompting you to begin a breathing exercise. Tap and hold to start the exercise. Breathe in for 4 seconds, hold for 7 seconds, out for 8 seconds.');
      $("#page3 button").fadeOut(1000);
      // $("#specialButton").css("display", "inline");
      $('#page3 img').attr('src','assets/loading_transform.gif');
      page4 = true;
}

/// ritual becomes more nonsensical as you move on

function step() {
  final = true;
  window.location.replace(urlVal);
  page6 = false;
  background(0,0,0);
  page4 =false;
}

function saveStep(){
  save(month() + "-" + day() + "-" + year() + "-" + hour() + "-" + minute() + ".jpg");
  $("#saveButton").css("display", "none");
  $("#toFinal").css("display", "inline");
  $("#page6 h1").text('Hit continue to submit.');
  $("#page6 p").css('display','none');
  page4 =false;
}
function toFinal(){
   window.location.href = 'final.html';
}


function internetFin(urlVal) {
  window.location.replace(urlVal);
}

function greet() {
  greet = true;
  page4 =false;
}

function step5(){
  $("#page3").fadeOut(1000);
  $("#page4").fadeIn(1500);
   $("#TheInput").fadeIn(1500);
  input = select('#TheInput');
  page4 =false;
  // input.position(document.body.clientWidth/4,300);
  // input.id('TheInput');

  // input2 = createInput();
  // input2.position(document.body.clientWidth/2.5,450);

  // input3 = createInput();
  // input3.position(document.body.clientWidth/2.5,500);

  // input4 = createInput();
  // input4.position(document.body.clientWidth/2.5, 550);

  // input5 = createInput();
  // input5.position(document.body.clientWidth/2.5, 600);

  // input6 = createInput();
  // input6.position(document.body.clientWidth/2.5, 650);
  var c = select('#specialSubmit');
  c.position(document.body.clientWidth/2.7,400);
  page5 = true;

}

function close(){
  $("#noButton").css("display", "none");
}

function moveOn(){
   $("#page6").fadeOut(1000);
   $("#page65").fadeIn(1500);
}


function step6(name){
  $("#page4").fadeOut(1000);
  $("#page5").fadeIn(1500);
   input.remove();
   $("#specialSubmit").fadeOut(1000);
   $("#SafeWord").fadeIn(1500);
   $("#SafeWord").text(name);
   $("#SafeWord").css('font-size','100px');
  // $("#page5").css("display", "inline");
}

function step7(){
      page4 =false;
   $("#page5").fadeOut(1000);
   $("#SafeWord").fadeOut(1000);
   $("#page5 p").fadeOut(1000);
   $("#SafeWord").fadeOut(1000);
   $("#continueSubmit").fadeOut(1000);
   $("#page6").fadeIn(1500);
  page6 = true;
}

function step8(){
  $("#page6").fadeOut(1000);
  $("#page7").fadeIn(1500);
  page6 = false;
      page4 =false;
  url = createInput('http://www.');
  url.position(document.body.clientWidth/3,350);
  background(0,0,0);
}








