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

let dang = document.querySelector("h3");
const arc = bang.getAttribute("Prework-Study-Guide Web Project");
const drk = bang.getAttribute("Horiseon Refactor Project");

dang.onclick = () => {
    if (arc) {
    window.open("https://sullivann7789.github.io/prework-study-guide/", "_blank");
    }
    if (drk) {
    window.open("https://sullivann7789.github.io/Horiseon-Refactor-Project", "_blank");
    }
    };
    

