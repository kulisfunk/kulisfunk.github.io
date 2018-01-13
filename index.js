var app = function(){

  var leftkey = 0;
  var rightkey = 0;
  var upKey = 0;
  var downKey = 0;
  var canvas = document.getElementById('main-canvas');
  // console.log('canvas', canvas);


  var context = canvas.getContext('2d');
  console.log(context);

  // context.fillStyle = "dodgerBlue";
  // context.fillRect(10, 10, 50, 50);
  var xAdjusted = 0;
  var yAdjusted = 0;
  // context.lineTo(100,200);
  // context.setLineDash([5, 5]);
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(200, 200);
  // context.lineTo(200, 300);
  // context.lineTo(100,300);
  // context.closePath();
  // context.stroke();

  //
  // context.beginPath();
  // // context.moveTo(400, 400);
  // context.arc(400, 400, 100, 0, 2 * Math.PI, false);
  // context.stroke();


  // working-----------------
var isDrawing;

canvas.onmousedown = function(position) {
  isDrawing = true;
  xAdjusted = (position.clientX - 155);
  yAdjusted = (position.clientY - 100);
  context.beginPath();
  context.moveTo(xAdjusted, yAdjusted);
};
canvas.onmousemove = function(position) {
  if (isDrawing) {
    xAdjusted = (position.clientX - 155);
    yAdjusted = (position.clientY - 100);
    context.lineTo(xAdjusted, yAdjusted);
    context.stroke();
  }
};
canvas.onmouseup = function(position) {
  isDrawing = false;
  xAdjusted = (position.clientX - 155);
  yAdjusted = (position.clientY - 100);
  context.closePath();
};
// ------------------------


var onKeyDown = function(event){
  context.beginPath();
  context.moveTo(xAdjusted, yAdjusted);
console.log(event);
console.log(event.keyCode);
  switch(event.keyCode){
    case 37:
    console.log("up");
      xAdjusted -= 5;
      break;
    case 38:
    console.log("up");
      yAdjusted -=5;
      break;
    case 39:
    console.log("right");
      xAdjusted += 5;
      break;
    case 40:
    console.log("down");
      yAdjusted += 5;
      break;

  }

  event.preventDefault();
  context.lineTo(xAdjusted, yAdjusted);
  console.log(xAdjusted);
  console.log(yAdjusted);
  context.closePath();
  context.stroke();

}







document.addEventListener('keydown', onKeyDown);


  // var drawCircle = function(x, y){
  //   context.beginPath();
  //   context.arc(x, y, 50, 0, Math.PI * 2, true);
  //   context.stroke();
  // }

 //  canvas.addEventListener('click', function(event){
 //    // console.log('clicked', event);
 //    // console.log('location', event.layerX, event.layerY);//layer gives relative to canvas
 //   drawCircle(event.layerX, event.layerY);
 // });

 // var img = document.createElement('img');
 // img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"
 //
 // var drawDog = function(){
 //   context.drawImage(img, 200, 200, 90, 90);


 // }
 // img.addEventListener('load', drawDog);

 var clearCanvas = function(){
      document.getElementById("canvas").classList.add("shake");

   
   setTimeout(function(){
      document.getElementById("canvas").classList.remove("shake");
     context.clearRect(0, 0, canvas.width, canvas.height);
   context.beginPath();

   }, 1000);
 }

 var clearButton = document.getElementById('clear');
 clearButton.addEventListener('click', clearCanvas);



 var changeColor = function(){
   console.log(this.value);
   context.strokeStyle = this.value;
 };

 var colorPicker = document.getElementById('color-picker');
 colorPicker.addEventListener('change', changeColor);



}



window.addEventListener('load', app);
