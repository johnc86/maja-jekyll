function navMenu() {
    var x = document.getElementById("siteNav");
    if (x.className === "topnav") {
        x.className += "--responsive";
    } else {
        x.className = "topnav";
    }

    var y = document.getElementById("logo");
    if (y.className === "header__logo--container") {
        y.className = "header__logo--responsive";
    } else {
        y.className = "header__logo--container";
    }
} 