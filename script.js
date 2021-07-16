function change(x){
  return "images/dice"+x+".png";
  // + is used for concatenation always remember
}
var p1=Math.floor((Math.random()*6)+1);
var p2=Math.floor((Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src",change(p1));
document.querySelector(".img2").setAttribute("src",change(p2));
if(p1>p2){
  document.querySelector("h1").textContent="Player 1 wins";
}
else if(p1===p2){
  document.querySelector("h1").textContent="No Player wins";
}
else{
  document.querySelector("h1").textContent="Player 2 wins";
}
