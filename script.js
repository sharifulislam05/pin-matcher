const displayPinRandom =  document.getElementById("display__pin--random");
const displayUserPin = document.querySelector(".display__pin--user");
let tryCount = 0;
const getRandomNumber = () => {
    const randomNumber = Math.floor(1000 + Math.random()*9000);
    displayPinRandom.value = randomNumber;
}
function showPin(number) {
    if(number == 'C') {
        displayUserPin.value = "";
    }
    else if(number == "<") {
        const backspace = displayUserPin.value.toString().slice(0, -2)
        displayUserPin.value = backspace;
    }
    else {
        let userPin = displayUserPin.value;
        userPin += number;
        displayUserPin.value =  userPin;
    }
}
const handleSubmit = () => {
    if(displayPinRandom.value == displayUserPin.value && displayUserPin.value != 0) {
        tryAgain("block", "none")
        displayUserPin.value = ""
        displayPinRandom.value = ""
    }
    else {
        let pinTryLeft = document.getElementById('pin__try').innerText
        tryAgain("none", "block")
        --pinTryLeft;
        tryCount++;
        if (tryCount == 3) {
            document.querySelector(".submit-btn").disabled = "true";
            document.querySelector(".submit-btn").style.backgroundColor = "#808080";
        }
        document.getElementById('pin__try').innerText = pinTryLeft
    }
}
function tryAgain(match, noMatch) {
    document.querySelector(".notify-match").style.display = match
    document.querySelector(".notify-not-match").style.display = noMatch
}
