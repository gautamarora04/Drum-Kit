var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", onclick);
}

function onclick() {
    char = this.innerHTML;
    makesound(char);
    addanimation(char);
}
document.addEventListener("keypress", function (event) {
    var string = event.key;
    makesound(string);
    addanimation(string);
})

function makesound(char) {

    switch (char) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
}

function addanimation(key) {
    var vari = document.querySelector("." + key);
    vari.classList.add("pressed");
    setTimeout(function(){
        vari.classList.remove("pressed");
    }, 100);

}