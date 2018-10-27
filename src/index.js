import style from "./_scss/main.scss";

//change slider's photo

document.addEventListener("DOMContentLoaded", (event) => {
    var next = document.getElementById('nextPic');
    var prev = document.getElementById('prevPic');
    var array = [];
    var allLi = document.querySelectorAll('.banner__slider li');
    var show = 0;

    allLi[show].classList.add('visible');

    next.addEventListener('click', () => {
        allLi[show].classList.remove('visible');
        show++;
        (show >= allLi.length) ?
            show = 0:null;

        allLi[show].classList.add('visible');
    });

    next.addEventListener(setInterval( () => {
        allLi[show].classList.remove('visible');
            show++;
            (show >= allLi.length) ?
                show = 0:null;
    
            allLi[show].classList.add('visible');
    }, 2000));
    
    prev.addEventListener('click', () => {
        allLi[show].classList.remove('visible');
        show--;
        (show <0) ?
            show = allLi.length -1:null;

        allLi[show].classList.add('visible');
    })
});

//change slider's test + button

document.addEventListener("DOMContentLoaded", (event) => {
    var next = document.getElementById('nextPic');
    var prev = document.getElementById('prevPic');
    var array = [];
    var allBox = document.querySelectorAll('.banner__box__all li');
    var play = 0;

    allBox[play].classList.add('visible');

    next.addEventListener('click', () => {
        allBox[play].classList.remove('visible');
        play++;
        (play >= allBox.length) ?
            play = 0:null;

        allBox[play].classList.add('visible');
    });

    next.addEventListener(setInterval( () => {
        allBox[play].classList.remove('visible');
            play++;
            (play >= allBox.length) ?
                play = 0:null;
    
            allBox[play].classList.add('visible');
    }, 2000));

    prev.addEventListener('click', () => {
        allBox[play].classList.remove('visible');
        play--;
        (play <0) ?
            play = allBox.length -1:null;

        allBox[play].classList.add('visible');
    })
});

//make invisible image bar box

var barTextHiding = document.querySelectorAll(".article__box__img__bar");
var leng = barTextHiding.length;
for (var i = 0; i < leng; i++) {
    barTextHiding[i].addEventListener('mouseover', function() {
    this.style.opacity = "0";
        });
    barTextHiding[i].addEventListener('mouseout', function() {
    this.style.opacity = "1";
        });
};