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