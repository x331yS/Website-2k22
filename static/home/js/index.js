// MORPH

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
    "Paakuinôgwzian,",
    "Hello,",
    "Pryvit,",
    "こんにちは,",
    "Bonjour,",
    "Goeie môre,",
    "Mirëmëngjes,",
    "Hallo,",
    "O zi à,",
    "Maayong buntag,",
    "Zdravo,",
    "Dobro utro,",
];

// Controls the speed of morphing.
const morphTime = 3;
const cooldownTime = 1;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
    // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 20)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 2) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 20)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 2) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

// Start the animation.
animate();


// Music

document.getElementById("playAudio").addEventListener("click", function(){
    const audio = document.getElementById('testAudio');
    if(this.className === 'social_list is-playing'){
        this.className = "social_list";
        document.getElementById("coloring").style.fill='white';
        audio.pause();
    }else{
        this.className = "social_list is-playing";
        document.getElementById("coloring").style.fill='currentcolor';
        audio.play();
    }

});

function github() {
    if (document.getElementById("github").style.stroke ==='currentcolor') {
        document.getElementById("github").style.stroke='white';
    } else {
        document.getElementById("github").style.stroke = 'currentcolor';
    }
}

function instagram() {
    if (document.getElementById("instagram").style.stroke === 'currentcolor') {
        document.getElementById("instagram").style.stroke='white';
    } else {
        document.getElementById("instagram").style.stroke='currentcolor';
    }
}
function linkedin() {
    if ( document.getElementById("linkedin").style.stroke === 'currentcolor') {
        document.getElementById("linkedin").style.stroke='white';
    } else {
        document.getElementById("linkedin").style.stroke='currentcolor';
    }
}

// Swiper

var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: true,
    effect: "slide",
    keyboardControl: true,
    mousewheelControl: 0
});