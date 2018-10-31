//scroll to top button

window.onscroll = () => {scrollFunction()};

function scrollFunction() {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ?
        document.getElementById("myBtn").style.display = "block"
     : document.getElementById("myBtn").style.display = "none";
    }

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}