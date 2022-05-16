document.getElementById("playAudio").addEventListener("click", function(){
    const audio = document.getElementById('testAudio');
    if(this.className === 'is-playing'){
        this.className = "";
        document.getElementById("coloring").style.fill='white';
        audio.pause();
    }else{
        this.className = "is-playing";
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