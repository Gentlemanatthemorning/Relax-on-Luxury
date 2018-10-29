//verify symbols inside the form

document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector("form");
    var errorMsg = document.querySelector(".form__submit");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var isOK = true;

        var email = this.elements["email"].value;
        if (email.indexOf("@") === -1) {
            alert('Your E-Mail must contain "@" character');
            isOK = false;
        }
        var name = this.elements["name"].value;
        if (name.length <= 6) {
            alert('Your Name must contain at least 6 leters');
            isOK = false;
        }

        var chk = this.elements["agree"].checked;
        if (!chk){
        alert('You have to agree with privacy policy');
        isOK = false
        }
        if (isOK){
            this.submit();
            }
    })
})