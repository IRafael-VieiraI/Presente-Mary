const b = document.querySelector('button.button_no')
const url ="https://irafael-vieirai.github.io/Presente-Mary/"
const btn = document.querySelector("#btn")
b.addEventListener("mouseover", moveHover)

function moveHover() {
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.left = i + "px";
    b.style.top = j + "px";
}

function openInNewTab (url) {
    const win = window.open(url)
    win.focus()
}
btn.addEventListener('click', () => {
    openInNewTab(url)
})