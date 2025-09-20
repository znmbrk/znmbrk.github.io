const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})

/*
$(document).ready(function() {
    $(".explode").click(function() {
        $(".logo__img").explode({
            omitLastLine: false,
            radius: 80,
            minRadius: 20,
            release: true,
            fadeTime:300,
            recycle:true,
            recycleDelay:500,
            fill:true,
            explodeTime:300,
            maxAngle:360,
            gravity:0,
            round:false,
            groundDistance:400,
            ignoreCompelete:false,
            land:true,
            checkOutBound,
            finish
        });
    });
});
*/
