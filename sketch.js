var myData;
var myImage;

function preload(){
  myData = loadJSON('./assets/peopleinspace.json');
  myImage = loadImage('./assets/shuttle.png');
}

function setup() {
  createCanvas(1070,510);
  console.log(myData)
  //myImage.filter(78,222,208);
  noCursor();
}

function draw(){

  background(6,18,69);

  
  //pallino testo
  fill(20,169,148);
  ellipse(176,345,3);
  ellipse(365,345,3);
  ellipse(520,345,3);
  ellipse(685,345,3);
  ellipse(828,345,3);
  
  
  //rettangolo testo
  var y= 335;
  var w=147;
  var h= 150;
  
  if(mouseX > 23 && mouseX< 23+w && mouseY > y && mouseY < y+h){
    fill(255,255,255);
    noStroke();
  } else {
    fill(6,18,69);
    noStroke();
  }
  rect(23,y,w,h);
  
  //r1
  if(mouseX > 182 && mouseX< 182+w && mouseY > y && mouseY < y+h){
    fill(255,255,255);
    noStroke();
  } else {
    fill(6,18,69);
    noStroke();
  }
  rect(182,y,w+28,h);
  
  //r2
  if(mouseX > 372 && mouseX< 372+w && mouseY > y && mouseY < y+h){
    fill(255,255,255);
    noStroke();
  } else {
    fill(6,18,69);
    noStroke();
  }
  rect(372,y,w-7,h);
  
  //r3
  if(mouseX > 529 && mouseX< 529+w && mouseY > y && mouseY < y+h){
    fill(255,255,255);
    noStroke();
  } else {
    fill(6,18,69);
    noStroke();
  }
  rect(529,y,w+2,h);
  
  //r4
  if(mouseX > 692 && mouseX< 692+w && mouseY > y && mouseY < y+h){
    fill(255,255,255);
    noStroke();
  } else {
    fill(6,18,69);
    noStroke();
  }
  rect(692,y,w-16,h);
  
  //r5
  if(mouseX > 834 && mouseX< 834+w && mouseY > y && mouseY < y+h){
    fill(255,255,255);
    noStroke();
  } else {
    fill(6,18,69);
    noStroke();
  }
  rect(834,y,w+55,h);
  
  
  //nomi astronauti

  textFont('Bungee Hairline',[16]);
  fill(20,169,148);
  textWidth(14);
  text(myData.people[0].name, 25, 350);
  text(myData.people[1].name, 184, 350);
  text(myData.people[2].name, 372, 350);
  text(myData.people[3].name, 530, 350);
  text(myData.people[4].name, 694, 350);
  text(myData.people[5].name, 836, 350);
  

  //data
  textFont('Aldrich',[13]);
  fill(26,18,69);
  //a10
  text(myData.people[0].country, 35, 380);
  text(myData.people[0].title, 35, 410);
  text(myData.people[0].etichetta, 35, 440);
  text(myData.people[0].launchdate, 35, 460);
  //a1
  text(myData.people[1].country, 194, 380);
  text(myData.people[1].title, 194, 410);
  text(myData.people[1].etichetta, 194, 440);
  text(myData.people[1].launchdate, 194, 460);
  //a2
  text(myData.people[2].country, 384, 380);
  text(myData.people[2].title, 384, 410);
  text(myData.people[2].etichetta, 384, 440);
  text(myData.people[2].launchdate, 384, 460);
  //a3
  text(myData.people[3].country, 541, 380);
  text(myData.people[3].title, 541, 410);
  text(myData.people[3].etichetta, 541, 440);
  text(myData.people[3].launchdate, 541, 460);
  //a4
  text(myData.people[4].country, 704, 380);
  text(myData.people[4].title, 704, 410);
  text(myData.people[4].etichetta, 704, 440);
  text(myData.people[4].launchdate, 704, 460);
  //a5
  text(myData.people[5].country, 846, 380);
  text(myData.people[5].title, 846, 410);
  text(myData.people[5].etichetta, 846, 440);
  text(myData.people[5].launchdate, 846, 460);

 
  //spaceshuttles
  var x2=73;
  var y2=250;
  image(myImage,x2-32,y2-135,110,200);
  //s2
  image(myImage,x2+138,y2-135,110,200);
  //s3
  image(myImage,x2+313,y2-135,110,200);
  //s4
  image(myImage,x2+495,y2-45,65,110);
  //s5
  image(myImage,x2+653,y2-45,65,110);
  //s5
  image(myImage,x2+815,y2-45,65,110);
  
  
  //pallino mouse
  fill(255,211,28);
  ellipse(mouseX,mouseY);
  beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX+11, mouseY+1);
  vertex(mouseX+13, mouseY+8);
  vertex(mouseX+20, mouseY+8);
  vertex(mouseX+14, mouseY+13);
  vertex(mouseX+17, mouseY+19);
  vertex(mouseX+11, mouseY+15);
  vertex(mouseX+5, mouseY+19);
  vertex(mouseX+8, mouseY+13);
  vertex(mouseX+1, mouseY+8);
  vertex(mouseX+9, mouseY+8);
  vertex(mouseX+11, mouseY+1);
  endShape(CLOSE);

}
