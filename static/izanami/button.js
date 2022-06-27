const LANDING = {};
LANDING.intro = document.querySelector(".button-page");
LANDING.path = LANDING.intro.querySelector("path");

const svgAnimation = () => {
    console.log("Animation");

    anime({
        targets: LANDING.intro,
        duration: 2000,
        easing: "easeInOutSine",
        translateY: "-200vh"
    });

    anime({
        targets: LANDING.path,
        duration: 1500,
        easing: "easeInOutSine",
        d: LANDING.path.getAttribute("pathdata:id")
    });
};

document.querySelector(".button-page__loader").addEventListener("click", svgAnimation);

