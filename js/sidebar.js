var sb_button = document.getElementById("sb-menu")
var menu = document.getElementById("mobile-menu")


sb_button.addEventListener("click", function() {
    menu.classList.toggle("is-open");
})

menu.addEventListener("click", function(event) {
    if (event.target.tagName === "A" || event.target.closest("a")) {
        menu.classList.remove("is-open");
    }
});