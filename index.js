var validKeys = ['a','w','s','d','j','k','l'];
// Detecting which button was pressed
var buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener("click", function (){
        var clicked = this.textContent;
        selectAudio(clicked);     
        buttonAnimation(clicked);   
    });
}

// Detecting which key was pressed 
document.addEventListener("keydown",function (event){
    selectAudio(event.key);
    buttonAnimation(event.key);
});

// Select which audio should be played depend on the user choice
function selectAudio(clickedDrum){
    switch (clickedDrum){
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's' :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
    }
}

// Adding Animation to the triggered buttons
function buttonAnimation (clicked){
    if (validKeys.includes(clicked)){
        var clickedDrum = document.querySelector("." + clicked);
        clickedDrum.classList.add("pressed");
        setTimeout(function (){
        clickedDrum.classList.remove("pressed");
        },100);

    }
}
