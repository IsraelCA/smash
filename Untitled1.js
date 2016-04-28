$( document ).ready(function() {
  


var GROUND_LEVEL = 480;

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
console.log(document.body);
document.onkeydown = function(key) {
  move(key.keyCode);
};

var kirbyReady = false;
var kirby = new Image();
kirby.onLoad = function() {
  kirbyReady = true;
};
kirbyObject = {};
kirby.src = "http://vignette3.wikia.nocookie.net/spritechronicles/images/5/5c/Kirby.png/revision/latest?cb=20101010225540";

kirbyObject.x = 300;
kirbyObject.y = 300;

var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var move = function(key) {
  if (key == upKey) {
    kirbyObject.y -= 50;
  }
  else if(kirbyObject.y + kirby.height<= GROUND_LEVEL-50&&key == downKey){
     kirbyObject.y += 50;
     
    }
  
   else if(key == leftKey){
     kirbyObject.x -= 50; 
    } 
   else if(key== rightKey){
      kirbyObject.x += 50;
     }
    
};

var gravity= function(){
  if (kirbyObject.y + kirby.height === GROUND_LEVEL) {
    return;
  } else {
    kirbyObject.y += 1;
  }
};

console.log(kirbyObject);

var metaKnightReady = false;
var metaKnight = new Image();
metaKnight.onLoad = function() {
metaKnightReady = true;
};
metaKnightObject = {};
metaKnight.src = "http://www.ssbwiki.com/images/thumb/1/1b/Meta_Knight_SSB4.png/250px-Meta_Knight_SSB4.png";

metaKnightObject.x = 50;
metaKnightObject.y = 200;

var up_Key = 87;
var down_Key = 83;
var left_Key = 65;
var right_Key = 68;
var move = function(key) {
  if (key == up_Key) {
    metaKnightObject.y -= 50;
  }
  else if(metaKnightObject.y + metaKnight.height<= GROUND_LEVEL-50&&key == down_Key){
     metaKnightObject.y += 50;
     
    }
  
   else if(key == left_Key){
     metaKnightObject.x -= 50; 
    } 
   else if(key== right_Key){
      metaKnightObject.x += 50;
     }
    
};



var gravity = function() {
  if (metaKnightObject.y + metaKnight.height === GROUND_LEVEL) {
    return;
  } else {
    metaKnightObject.y += 1;
  }
};












var reset = function() {
	context.clearRect(0, 0, canvas.width, canvas.height);
  // left, top, width, height
  context.fillRect(0, GROUND_LEVEL, canvas.width, 10);
};




var render =function() {

  reset();
  
  gravity();
  
  
  
 context.drawImage(kirby,kirbyObject.x,kirbyObject.y);context.drawImage(metaKnight,metaKnightObject.x,metaKnightObject.y);};
                                                   
var main = function() {

  render();
  window.requestAnimationFrame(main);
};

main();


});