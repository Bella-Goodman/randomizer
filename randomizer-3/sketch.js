//Arrays used to store multiple values in a single variable
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

function setup() {
  createCanvas(600, 600);
  background(220);

//random number, last array doesn't exist - doesn't return last so will not go beyond the array
// int(random(cats.length)) = random # generator
 //print to console and delete from array
}

function draw() {

}

function mousePressed() {
  background(random(225));
  randomIndex = int(random(cats.length));
  text(cats[randomIndex].name, 50, 50);

}
