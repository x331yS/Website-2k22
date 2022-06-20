$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
    const element = document.querySelector('.option.active')
    let style = getComputedStyle(element);
    let imgs = style.backgroundImage;
    document.getElementById("projects-popup").style.background = `linear-gradient(180deg, #3c393d 10%,rgba(60,57,61,0.9) 12%,rgba(60,57,61,0.7) 15%,rgba(60,57,61,0.5) 17%,rgba(60,57,61,0.2) 20%,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 60%, #3c393d 99%), ${imgs} no-repeat bottom`
});