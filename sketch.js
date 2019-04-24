
// window.location.replace("http://www.yahoo.com"); 
var touchSize, touchSize2, touchSize3, touchSize4;
var dir,dir2,dir3,dir4;
var page2, page3, page5, page6, final;
var firstPress;
function preload(){

}

function setup() {
  firstPress = false;
  let h = document.body.clientHeight;
  let w = document.body.clientWidth;
  createCanvas(windowWidth-windowWidth*0.05,windowHeight-windowHeight*0.1);
  page2 = false;
  page3 = false;
  touchSize = 100;
  touchSize2 = 15;
  touchSize3 = 100;
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
        if(pressed == true){
          pressed = false;
        }
        else{
          pressed = true;
        }
      }
    //bottom left
      if(mouseIsPressed && mouseX > 0 && mouseX < document.body.clientWidth/2 && mouseY > document.body.clientHeight/2 && mouseY < document.body.clientHeight){
        if(pressed2 == false){
          pressed2 = true;
        }
        else{
          pressed2 = false;
        }
      }

    //top right
    if(mouseIsPressed && mouseX > document.body.clientWidth/2 && mouseX < document.body.clientWidth && mouseY > 0 && mouseY < document.body.clientHeight/2){
        if(pressed3 == false){
          pressed3 = true;
        }
        else{
          pressed3 = false;
        }
      }
    //bottom left
      if(mouseIsPressed && mouseX > document.body.clientWidth/2 && mouseX < document.body.clientWidth && mouseY > document.body.clientHeight/2 && mouseY < document.body.clientHeight){
        if(pressed4 == false){
          pressed4 = true;
        }
        else{
          pressed4 = false;
        }
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
        const name = input.value() ;
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
      if(mouseIsPressed){
        fill(255);
        noStroke();
        ellipse(mouseX,mouseY,10);
      }
    }

  }

function myInputEvent() {
  console.log('you are typing: ', this.value());
}


function step2() {
    $("#page1").css("display", "none");
    $("#page2").css("display", "inline");
    page2 = true;
}

function step3() {
    $("#page2").css("display", "none");
    $("#page3").css("display", "inline");
    page2 = false;
    page3 = true;
}

function step4() {
      $("#page3 h1").text('Lets practice');
      $("#page3 p").text('Close your eyes and pay attention to the sounds around you for 10 seconds.');
      $("#page3 button").css("display", "none");
      $("#specialButton").css("display", "inline");
}

/// ritual becomes more nonsensical as you move on

function step() {
  final = true;
  window.location.replace(urlVal);
  page6 = false;
  background(0,0,0);
}

function internetFin(urlVal) {
  window.location.replace(urlVal);
}

function greet() {
  greet = true;
}

function step5(){
  $("#page3").css("display", "none");
  $("#page4").css("display", "inline");

  input = createInput();
  input.position(document.body.clientWidth/4,300);

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

function step6(name){
  $("#page4").css("display", "none");
  $("#page5").css("display", "inline");
   input.remove();
   $("#specialSubmit").css('display','none');
   $("#page5 h1").text(name);
   $("#page5 h1").css('font-size','100px');
  // $("#page5").css("display", "inline");
}

function step7(){
  $("#page5").css("display", "none");
   $("#page5 h1").css("display","none");
   $("#page5 p").css("display","none");
  $("#continueSubmit").css('display','none');
  $("#page6").css("display", "inline");
  page6 = true;

}

function step8(){
  $("#page6").css("display", "none");
  $("#page7").css("display", "inline");
  page6 = false;
  url = createInput('http://www.');
  url.position(document.body.clientWidth/3,350);
  background(0,0,0);
}

