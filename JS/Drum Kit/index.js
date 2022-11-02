
for(var i =0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        var click = this.innerHTML;
        handleClick(click);
        buttonAnimation(click);
    });
}

document.addEventListener("keypress" , key);

function handleClick(button) {

    // this.style.color = "white";
    // 

    switch (button) {
        case "w": 
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a": 
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "s": 
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d": 
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "j": 
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k": 
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l": 
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
    
        default:
            break;
    }

    
    // // alert("hello");
}

// function keyPress() {
//     document.addEventListener("keypress" , function(event){
//         console.log(event);
//         return event.key;
        
//     })
// }


    // console.log(event);
    // return event.key});

function key(event){
    // console.log(event);
    // console.log(event.key);
    // return event.key;
    handleClick(event.key);
    buttonAnimation(event.key);
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    // 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 1000);
}