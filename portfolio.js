

let bang = document.querySelector("img");
const src = bang.getAttribute("src");

bang.onclick = () => {
    if (src === "HRSN.png") {
        const hrsn = window.open("https://sullivann7789.github.io/Horiseon-Refactor-Project", "_blank");
    } else {
        const pwsg = window.open("https://sullivann7789.github.io/prework-study-guide/", "_blank");
    }
    if (!src === "HRSN.png") {
        const pwsg =  window.open("https://sullivann7789.github.io/prework-study-guide/", "_blank");
    } else {
        const hrsn = window.open("https://sullivann7789.github.io/Horiseon-Refactor-Project", "_blank");
    }
    };

let stang = document.querySelectorAll("img");
const hrc = bang.getAttribute("src");

stang.onclick = () => {
    if (hrc === "PWSG.png") {
        const dork = window.open("https://sullivann7789.github.io/prework-study-guide/", "_blank");
    }
};
