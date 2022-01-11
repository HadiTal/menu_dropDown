$(document).ready(function() {
    $("#nav-toggle").click(function() {
        $(".nav-list-mobile").toggleClass("test");
        $(".nav-list-mobile li").toggleClass("test2");

    });

    $("#nav-toggle").click(function() {
        this.classList.toggle("active");

    });
});