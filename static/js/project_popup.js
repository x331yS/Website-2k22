$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    const element = document.querySelector('.option.active')
    let style = getComputedStyle(element);
    let imgs = style.backgroundImage;
    document.getElementById("projects-popup").style.background = imgs;

});