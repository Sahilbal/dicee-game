var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+ randomNumber1+".png";
var randomPic1 = "images/" + randomImage1;
document.querySelectorAll("img")[0].setAttribute("src",randomPic1);
 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+ randomNumber2+".png";
var randomSource = "images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomSource);

if (randomNumber1>randomNumber2) { 
    document.querySelector("h1").innerHTML = "⛳Player 1 winss"
    
} else if(randomNumber2>randomNumber1) {document.querySelector("h1").innerHTML ="player 2 wins⛳"
    
} else{
    document.querySelector("h1").innerHTML ="Draw!"
}
