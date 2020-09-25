var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// left side dice 
var randomImages = "dice" + randomNumber1 + ".png";
var allImages = "images/" + randomImages;
var Images = document.querySelectorAll("img")[0].setAttribute("src", allImages);
// right side dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 = "dice" + randomNumber2 + ".png";
var allImages2 = "images/" + randomImages2;
var Images2 = document.querySelectorAll("img")[1].setAttribute("src", allImages2);
// if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins 🎉";
}
// if player 2 wins
if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎊Player 2 Wins🎊"
}
// if its a draw between both players
if (randomNumber2 == randomNumber1) {
    document.querySelector("h1").innerHTML = " DRAW!🤦‍♂️"
}