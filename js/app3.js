var barTextHiding = document.querySelectorAll(".article__box__img__bar");
var leng = barTextHiding.length;
for (var i = 0; i < leng; i++) {
    barTextHiding[i].addEventListener('mouseover', function() {
    this.style.opacity = "0";
        });
    barTextHiding[i].addEventListener('mouseout', function() {
    this.style.opacity = "1";
        });
}