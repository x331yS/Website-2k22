var paw_left_down = document.getElementById("paw-left--down");
var paw_right_down = document.getElementById("paw-right--down");
var paw_left_up = document.getElementById("paw-left--up");

setTimeout(function () {
    happycat()
}, 24000);

function happycat() {
    paw_left_down.style.animation = "blinkcat 200ms infinite";
    paw_left_down.style.animationDelay = "100ms";
    paw_left_up.style.animation = "blinkcat 200ms infinite";
    paw_right_down.style.animation = "blinkcat 200ms infinite";
    document.getElementsByClassName("typing-animation")[0].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[1].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[2].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[3].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[4].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[5].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[6].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[7].style.animationDuration = "1200ms";
    document.getElementsByClassName("typing-animation")[8].style.animationDuration = "1200ms";
}
function badcat() {
    if (document.getElementsByClassName("nrv")[0].style.animationDelay === "5s"){
        document.getElementsByClassName("sun")[0].style.opacity = "1";
        document.getElementsByClassName("eye")[0].style.opacity = "0";
        document.getElementsByClassName("eye")[1].style.opacity = "0";
        paw_left_down.style.animation = "blinkcat 100ms infinite";
        paw_left_down.style.animationDelay = "50ms";
        paw_left_up.style.animation = "blinkcat 100ms infinite";
        paw_right_down.style.animation = "blinkcat 100ms infinite";
        document.getElementsByClassName("typing-animation")[0].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[1].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[2].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[3].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[4].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[5].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[6].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[7].style.animationDuration = "400ms";
        document.getElementsByClassName("typing-animation")[8].style.animationDuration = "400ms";
    } else {
    happycat()
    document.getElementsByClassName("nrv")[0].style.animationDelay = "5s";
    document.getElementsByClassName("nrv")[1].style.animationDelay = "5s";
    }
}
