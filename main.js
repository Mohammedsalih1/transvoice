let playBtn = document.getElementById("play-btn");
let pauseBtn = document.getElementById("pause-btn");
let stopBtn = document.getElementById("stop-btn");
let textInput = document.getElementById("text");
let speadInput = document.getElementById("spead");
let cross = document.getElementById("cross");
let welcomePage = document.querySelector(".welcome-page");
let WelcomePageLogo = document.querySelector("#WlcomePageLogo");
let sayHi = document.querySelector("#sayHi");
let inputFaild = document.querySelector("#input-faild");
let currentcharcter;

// welcome page 
setTimeout(() => {
    WelcomePageLogo.style.top="20%";
}, 1000);

setTimeout(() => {
    sayHi.style.top="35%";
    sayHi.style.opacity="1";
}, 2000);

setTimeout(() => {
    welcomePage.style.display="none";
}, 4000);

let hi = ["hi sir how are you doing today?", "glad to have you back sir"];

setTimeout(() => {
    // window.onload = () => {
        const utterance = new SpeechSynthesisUtterance("hi you");
        speechSynthesis.speak(utterance);
    // };
}, 5000);
// welcoming the user by his name 
// const okBtn = document.getElementById("okButton");

// removing the text from the input
textInput.addEventListener("input", function () {
    cross.classList.add("apearing");

    if (textInput.value === "") {
        cross.classList.remove("apearing");
    }

})
cross.onclick = () => {
    textInput.value = "";
    cross.classList.remove("apearing");
}
 
playBtn.addEventListener("click", () => {
    playText(textInput.value);
})

pauseBtn.addEventListener('click', pauseText);

stopBtn.addEventListener("click", stopText);
speadInput.addEventListener("input", () => {
    stopText()
    playText(utterance.text.substring(currentcharcter))
})

let utterance = new SpeechSynthesisUtterance()



utterance.addEventListener('end', () => {
    textInput.disabled = false
})

utterance.addEventListener("boundary", e => {
    currentcharcter = e.charIndex
})

function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume();
    }
    if (speechSynthesis.speaking) return;
    utterance.text = text
    utterance.rate = speadInput.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}
function pauseText() {
    if (speechSynthesis.speaking) {
        speechSynthesis.pause()
    }
}
function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}



