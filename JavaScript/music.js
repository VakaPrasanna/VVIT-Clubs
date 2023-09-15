var song = document.getElementById("song");
var icon = document.getElementById("playicon");
icon.onclick = function(){
    if (song.paused){
        song.play();
        icon.src="/Images/stop.jpg";
    }else{
        song.pause();
        icon.src="/Images/py1.jpg";
    }
}

