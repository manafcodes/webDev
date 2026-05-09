let image1 = document.getElementsByClassName("img1");
let image2 = document.getElementsByClassName("img2");

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

image1[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
image2[0].setAttribute("src", `./images/dice${randomNumber2}.png`);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

console.log(randomNumber1);
console.log(randomNumber2);