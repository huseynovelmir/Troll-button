const button = document.querySelector(".button")
const buttonArea = document.querySelector(".button-area")
const question = document.querySelector(".question")
const answer = document.querySelector(".answer")
const visit = document.querySelector(".visit")
let width = buttonArea.offsetWidth;
let height = buttonArea.offsetHeight;
console.log(window);
const moveButton = () => {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const winWidth = width - buttonWidth;
    const winHeight = height - buttonHeight;

    button.style.translate = `
    ${Math.floor(Math.random()*(winWidth + 1))}px
    ${Math.floor(Math.random()*(winHeight + 1))}px
    `
}
button.addEventListener("mouseover", moveButton)


function yesbtn() {
question.style.display = "none";
answer.style.display = "block"
buttonArea.style.display ="none"
visit.style.display = "flex"
    
}
