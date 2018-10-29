document.addEventListener("DOMContentLoaded", (event) => {
    var next = document.getElementById('nextPic');
    var prev = document.getElementById('prevPic');
    var array = [];
    var allLi = document.querySelectorAll('.banner__box__all li');
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
