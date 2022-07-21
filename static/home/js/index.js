// FADE
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

// Project Popup

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
    const element = document.querySelector('.option.active')
    let style = getComputedStyle(element);
    let imgs = style.backgroundImage;
    document.getElementById("projects-popup").style.background = `linear-gradient(180deg, #3c393d 10%,rgba(60,57,61,0.9) 12%,rgba(60,57,61,0.7) 15%,rgba(60,57,61,0.5) 17%,rgba(60,57,61,0.2) 20%,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 60%, #3c393d 99%), ${imgs} no-repeat bottom`
});

// Project Rotate

const { gsap, imagesLoaded } = window;

const buttons = {
    prev: document.querySelector(".btn--left"),
    next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
    const currentCardEl = cardsContainerEl.querySelector(".current--card");
    const previousCardEl = cardsContainerEl.querySelector(".previous--card");
    const nextCardEl = cardsContainerEl.querySelector(".next--card");

    const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
    const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
    const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

    changeInfo(direction);
    swapCardsClass();

    removeCardEvents(currentCardEl);

    function swapCardsClass() {
        currentCardEl.classList.remove("current--card");
        previousCardEl.classList.remove("previous--card");
        nextCardEl.classList.remove("next--card");

        currentBgImageEl.classList.remove("current--image");
        previousBgImageEl.classList.remove("previous--image");
        nextBgImageEl.classList.remove("next--image");

        currentCardEl.style.zIndex = "50";
        currentBgImageEl.style.zIndex = "-2";

        if (direction === "right") {
            previousCardEl.style.zIndex = "20";
            nextCardEl.style.zIndex = "30";

            nextBgImageEl.style.zIndex = "-1";

            currentCardEl.classList.add("previous--card");
            previousCardEl.classList.add("next--card");
            nextCardEl.classList.add("current--card");

            currentBgImageEl.classList.add("previous--image");
            previousBgImageEl.classList.add("next--image");
            nextBgImageEl.classList.add("current--image");
        } else if (direction === "left") {
            previousCardEl.style.zIndex = "30";
            nextCardEl.style.zIndex = "20";

            previousBgImageEl.style.zIndex = "-1";

            currentCardEl.classList.add("next--card");
            previousCardEl.classList.add("current--card");
            nextCardEl.classList.add("previous--card");

            currentBgImageEl.classList.add("next--image");
            previousBgImageEl.classList.add("current--image");
            nextBgImageEl.classList.add("previous--image");
        }
    }
}

function changeInfo(direction) {
    let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
    let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
    let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

    gsap.timeline()
        .to([buttons.prev, buttons.next], {
            duration: 0.2,
            opacity: 0.5,
            pointerEvents: "none",
        })
        .to(
            currentInfoEl.querySelectorAll(".text"),
            {
                duration: 0.4,
                stagger: 0.1,
                translateY: "-120px",
                opacity: 0,
            },
            "-="
        )
        .call(() => {
            swapInfosClass(direction);
        })
        .call(() => initCardEvents())
        .fromTo(
            direction === "right"
                ? nextInfoEl.querySelectorAll(".text")
                : previousInfoEl.querySelectorAll(".text"),
            {
                opacity: 0,
                translateY: "40px",
            },
            {
                duration: 0.4,
                stagger: 0.1,
                translateY: "0px",
                opacity: 1,
            }
        )
        .to([buttons.prev, buttons.next], {
            duration: 0.2,
            opacity: 1,
            pointerEvents: "all",
        });

    function swapInfosClass() {
        currentInfoEl.classList.remove("current--info");
        previousInfoEl.classList.remove("previous--info");
        nextInfoEl.classList.remove("next--info");

        if (direction === "right") {
            currentInfoEl.classList.add("previous--info");
            nextInfoEl.classList.add("current--info");
            previousInfoEl.classList.add("next--info");
        } else if (direction === "left") {
            currentInfoEl.classList.add("next--info");
            nextInfoEl.classList.add("previous--info");
            previousInfoEl.classList.add("current--info");
        }
    }
}

function updateCard(e) {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const centerPosition = {
        x: box.left + box.width / 2,
        y: box.top + box.height / 2,
    };
    let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
    gsap.set(card, {
        "--current-card-rotation-offset": `${angle}deg`,
    });
    const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
    gsap.set(currentInfoEl, {
        rotateY: `${angle}deg`,
    });
}

function resetCardTransforms(e) {
    const card = e.currentTarget;
    const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
    gsap.set(card, {
        "--current-card-rotation-offset": 0,
    });
    gsap.set(currentInfoEl, {
        rotateY: 0,
    });
}

function initCardEvents() {
    const currentCardEl = cardsContainerEl.querySelector(".current--card");
    currentCardEl.addEventListener("pointermove", updateCard);
    currentCardEl.addEventListener("pointerout", (e) => {
        resetCardTransforms(e);
    });
}

initCardEvents();

function removeCardEvents(card) {
    card.removeEventListener("pointermove", updateCard);
}

function init() {

    let tl = gsap.timeline();

    tl.to(cardsContainerEl.children, {
        delay: 0.15,
        duration: 0.5,
        stagger: {
            ease: "power4.inOut",
            from: "right",
            amount: 0.1,
        },
        "--card-translateY-offset": "0%",
    })
        .to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1,
            opacity: 1,
            translateY: 0,
        })
        .to(
            [buttons.prev, buttons.next],
            {
                duration: 0.4,
                opacity: 1,
                pointerEvents: "all",
            },
            "-=0.4"
        );
}

const waitForImages = () => {
    gsap.set(cardsContainerEl.children, {
        "--card-translateY-offset": "100vh",
    });
    gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
        translateY: "40px",
        opacity: 0,
    });
    gsap.set([buttons.prev, buttons.next], {
        pointerEvents: "none",
        opacity: "0",
    });
    init();
};

waitForImages();

// CAT

const paw_left_down = document.getElementById("paw-left--down");
const paw_right_down = document.getElementById("paw-right--down");
const paw_left_up = document.getElementById("paw-left--up");

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
