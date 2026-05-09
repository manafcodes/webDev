let buttons = document.getElementsByClassName("drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
    alert("I got clicked!");
});
}
