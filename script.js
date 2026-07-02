window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(255,255,255,.9)";
    }else{
        header.style.background = "rgba(255,255,255,.6)";
    }
});