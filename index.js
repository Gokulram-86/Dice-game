var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);

var random2 = Math.floor(Math.random() * 6) + 1;
var ranimgsrc2 = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ranimgsrc2);

if(randomNumber1 > random2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(random2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
