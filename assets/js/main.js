var mobileMenuBtns = document.querySelectorAll("header .bottom .content .right button");

mobileMenuBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var navElement = document.querySelector("header .bottom .content nav");
        if (navElement) {
            if (navElement.classList.contains("opened")) {
                navElement.classList.remove("opened");
            } else {
                navElement.classList.add("opened");
            }
        } else {
            console.error("Nav elementi bulunamadı!");
        }
    });
});
