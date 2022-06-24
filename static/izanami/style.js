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
        c++;

        if(counter === 101) {
            clearInterval(i);
            fadeOutEffect()
            setTimeout(function () {
                loaderDelete()
            }, 5000);
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
// setTimeout(function () {
//     loaderDelete()
//     fadeInEffect()
// }, 5000);
//
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
