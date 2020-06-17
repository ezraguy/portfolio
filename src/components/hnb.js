


window.addEventListener("click", function () {
    document.getElementById("navbarNav").classList.remove("show");
});





document.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {

        document.getElementById("topBtn").style.opacity = 1;
    }
    else
        document.getElementById("topBtn").style.opacity = 0;
});




