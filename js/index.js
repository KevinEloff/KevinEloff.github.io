
window.onscroll = function (e) {  
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 170) {
        document.getElementById("navigation").style.background="#270c27";
    } else if (!toggled) {
        document.getElementById("navigation").style.background="";
    }

    let bionav = document.getElementById("bio-nav");
    if (scrollTop > 338) {
        bionav.style.top = scrollTop-322 + 'px';
    } else {
        bionav.style.top = '';
    }
}

window.onresize = function(event) {
    if (toggled)
        togglenav()
};

var toggled = false;
function togglenav() {
    let nav = document.getElementById("navigation");
    var scrollTop = $(window).scrollTop();
    let navOptions = document.getElementById("nav-options");

    if (!toggled) {
        nav.style.background="#270c27";
        nav.style.height = '9.5em';
        navOptions.style.display = 'block';
        setTimeout(function (){
            navOptions.style.opacity = '1';
            navOptions.style.transition = '200ms';
          }, 10);
    } else {
        if (scrollTop > 170) {
            document.getElementById("navigation").style.background="#270c27";
        } else {
            document.getElementById("navigation").style.background="";
        }
        nav.style.height = '';
        navOptions.style.display = '';
        navOptions.style.opacity = '';
        navOptions.style.transition = '0ms';
    }

    toggled = !toggled;
}

$( document ).ready(function() {
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top,
            duration: 400
        });
    });
});

function scrollTo(evt) {
    var section = document.getElementById(evt.value);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
}