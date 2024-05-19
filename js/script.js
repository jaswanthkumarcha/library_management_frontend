
let navLinks = document.querySelector(".navLinks");

document.querySelector("#menuBtn").onclick = () => {
    navLinks.classList.toggle('active');
}

/*=== pre loader ===*/

var loader = document.querySelector('.preloader');

window.addEventListener("load", function() {

    loader.classList.add('active');

});