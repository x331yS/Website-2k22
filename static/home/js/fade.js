setTimeout(function () {
    fadeOutEffect()
}, 4000);

function fadeOutEffect() {
    var fadeTarget = document.getElementById("preloader");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 80);
}
setTimeout(function () {
    loaderDelete()
    fadeInEffect()
}, 5000);

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
    const project = document.getElementById("projects");
    const loader = document.getElementById("preloader");
    const pointer = document.getElementById("pointer");
    loader.style.display = "none"
    pointer.style.visibility = "visible"
    project.style.visibility = "visible";
}