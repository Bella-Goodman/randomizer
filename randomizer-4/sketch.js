

let cats = [{
  name: "yugi",
  color: "brown"
}, {
  name: "Zeffi",
  color: "black"
}, {
  name: "Lu",
  color: "tan"
}, {
  name: "River",
  color: "grey"
}, {
  name: "Luna",
  color: "light grey"
}];
//[0,1,2,3,4]

let randomIndex;
let animating = false;
let memes = [];
let imageCounter = 0;
let button;

function preload(){

  for(let i = 0; i <= 8; i++){
    memes[i] = loadImage(`assets/meme_${i}.jpg`)

  }
}

function setup() {
  createCanvas(700, 700);
  background(26, 26, 26);
  imageMode(CENTER);

button = createButton("CLICK FOR YOUR ANWSER");
button.mousePressed(buttonPressed);
button.class("randomizerButton");

}

function draw() {
    if(animating == true){
      clear();
      image(memes[imageCounter], width / 2, height / 2);

    if(imageCounter < memes.length - 1){
      imageCounter++;
    } else {
      imageCounter = 0;
    }
    }

}
function randomizer(){
  animating = false;
   if (memes[0]) {
     clear();
     randomIndex = int(random(memes.length));
     image(random(memes), width / 2, height / 2);

     memes.splice(randomIndex, 1);
   } else{
     background(random(200, 255));
     text("nothing left!", 50, 50);
   }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
