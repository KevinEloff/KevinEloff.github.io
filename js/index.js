
window.onscroll = function (e) {  
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 170) {
        document.getElementById("navigation").style.background="#270c27";
    } else {
        document.getElementById("navigation").style.background="";
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