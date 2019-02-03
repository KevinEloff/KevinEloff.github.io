
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
    var navLabels = document.getElementsByClassName("nav-labels")
    if (window.location.hash != "") { //Go to selected hash page
        var validRef = false;
        for (let i = 0; i < navLabels.length; i++) {
            navLabels[i].style.color = "";
            if (navLabels[i].text.toLowerCase() == window.location.hash.split("#")[1]) {
                validRef = true;
                openContent({target: navLabels[i]});
            }   
        }
        if (!validRef) { //Reset to home page
            window.location.href = window.location.href.split('#')[0]
            for (let i = 0; i < navLabels.length; i++) if (navLabels[i].text == "Home") {
                openContent({target: navLabels[i]});
            }
        }
    } else { //Display home page as default
        for (let i = 0; i < navLabels.length; i++) if (navLabels[i].text == "Home") {
                openContent({target: navLabels[i]});
        }
    }
});


var content;
function openContent(evt) {
    // while ($(window).scrollTop()>300);
    var navLabels = document.getElementsByClassName("nav-labels")
    for (let i = 0; i < navLabels.length; i++)
        navLabels[i].style.color = "";
    evt.target.style.color = "#f2f2f2";
    
    if (content != evt.target.text) {
        switch (evt.target.text) {
            case 'Home':
                var projects = document.getElementsByClassName("projects");
                var contact = document.getElementsByClassName("contact");
                var home = document.getElementsByClassName("home");
                for (let i = 0; i < projects.length; i++){
                    projects[i].style.opacity = '0';
                    projects[i].style.transition = '150ms';
                }
                for (let i = 0; i < contact.length; i++){
                    contact[i].style.opacity = '0';
                    contact[i].style.transition = '150ms';
                }
                for (let i = 0; i < home.length; i++) {
                    home[i].style.opacity = '0';
                    home[i].style.display = 'block';
                    home[i].style.transition = '0ms';
                }

                setTimeout(function (){
                    for (let i = 0; i < home.length; i++) {
                        home[i].style.opacity = '1';
                        home[i].style.transition = '150ms';
                    }
                    
                    for (let i = 0; i < projects.length; i++) {
                        projects[i].style.display = 'none';
                        projects[i].style.transition = '0ms';
                    }
                    for (let i = 0; i < contact.length; i++) {
                        contact[i].style.display = 'none';
                        contact[i].style.transition = '0ms';
                    }
                    
                    setTimeout(function (){
                        for (let i = 0; i < home.length; i++) {
                            home[i].style.transition = '0ms';
                        }
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }, 150);
                }, 150);

                break;
            case 'Projects':
                var home = document.getElementsByClassName("home");
                var contact = document.getElementsByClassName("contact");
                var projects = document.getElementsByClassName("projects");
                for (let i = 0; i < home.length; i++){
                    home[i].style.opacity = '0';
                    home[i].style.transition = '150ms';
                }
                for (let i = 0; i < contact.length; i++){
                    contact[i].style.opacity = '0';
                    contact[i].style.transition = '150ms';
                }
                for (let i = 0; i < projects.length; i++) {
                    projects[i].style.opacity = '0';
                    projects[i].style.display = 'block';
                    projects[i].style.transition = '0ms';
                }

                setTimeout(function (){
                    for (let i = 0; i < projects.length; i++) {
                        projects[i].style.opacity = '1';
                        projects[i].style.transition = '150ms';
                    }
                    
                    for (let i = 0; i < home.length; i++) {
                        home[i].style.display = 'none';
                        home[i].style.transition = '0ms';
                    }
                    for (let i = 0; i < contact.length; i++) {
                        contact[i].style.display = 'none';
                        contact[i].style.transition = '0ms';
                    }
                    
                    setTimeout(function (){
                        for (let i = 0; i < projects.length; i++) {
                            projects[i].style.transition = '0ms';
                        }
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }, 150);
                }, 150);

                break;
            case 'Contact':
                var home = document.getElementsByClassName("home");
                var contact = document.getElementsByClassName("contact");
                var projects = document.getElementsByClassName("projects");
                for (let i = 0; i < home.length; i++){
                    home[i].style.opacity = '0';
                    home[i].style.transition = '150ms';
                }
                for (let i = 0; i < projects.length; i++){
                    projects[i].style.opacity = '0';
                    projects[i].style.transition = '150ms';
                }
                for (let i = 0; i < contact.length; i++) {
                    contact[i].style.opacity = '0';
                    contact[i].style.display = 'block';
                    contact[i].style.transition = '0ms';
                }

                setTimeout(function (){
                    for (let i = 0; i < contact.length; i++) {
                        contact[i].style.opacity = '1';
                        contact[i].style.transition = '150ms';
                    }
                    
                    for (let i = 0; i < home.length; i++) {
                        home[i].style.display = 'none';
                        home[i].style.transition = '0ms';
                    }
                    for (let i = 0; i < projects.length; i++) {
                        projects[i].style.display = 'none';
                        projects[i].style.transition = '0ms';
                    }
                    
                    setTimeout(function (){
                        for (let i = 0; i < contact.length; i++) {
                            contact[i].style.transition = '0ms';
                        }
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }, 150);
                }, 150);
                
                break;
        }
    }

    content = evt.target.text;
}