const hrsn = window.open("https://sullivann7789.github.io/Horiseon-Refactor-Project", "_blank");
const pwsg = window.open("https://sullivann7789.github.io/prework-study-guide/", "_blank");

let bang = document.querySelector("img");
const src = bang.getAttribute("src");

bang.onclick = () => {
    if (src === "HRSN.png") {
        hrsn
    } else {
        pwsg
    }
};
