let video = document.getElementById('video');

$(document).ready(function() {

    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
        $(".loading-page .counter h1").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");
        //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

        /*
        $(".loading-page .counter h1.color").css("width", c + "%");
        */
        counter++;
        counter++;
        c++;
        c++;

        if(counter === 102) {
            clearInterval(i);
            fadeOutEffect()
            setTimeout(function () {
                loaderDelete()
                video.play()
            }, 2000);
        }
    }, 50);
});

function fadeOutEffect() {
    var fadeTarget = document.getElementById("preloader");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
                fadeInEffect()
                clearInterval(fadeEffect);
        }
    }, 80);
}
function fadeInEffect() {

    var fadeTarget = document.getElementById("afterloader");
    var fadeEffect = setInterval(function () {
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity += 1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 80);
}

function loaderDelete() {
    const loader = document.getElementById("preloader");
    loader.style.display = "none"

}

/**** VIDEO JS ****/

function videoRestart() {
    let em = document.getElementById("button_more");
    let  button = window.getComputedStyle(em).getPropertyValue("opacity");
    if (button > 0) {
        em.style.opacity = "0";
        video.pause()
        video.currentTime = 0;
        video.load();
        video.muted = false
        video.play()
    } else {
        em.style.opacity = "1";
        video.muted = true
    }

}

/**** INTRO JS ****/

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

/**** CARD JS ****/

document.querySelector(".button-page__loader").addEventListener("click", svgAnimation);

"use strict";
let body = document.getElementById("card")
let tilted = false;
let toggleTilt = function () {
    tilted = !tilted;
    if (tilted)
        body.classList.add('details');
    else
        body.classList.remove('details');
};
body.addEventListener('click', toggleTilt);
body.addEventListener('touchstart', toggleTilt);
if (location.pathname.match(/fullcpgrid/i))
    setTimeout(toggleTilt, 1000);
