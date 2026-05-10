var sidenav = document.querySelector(".side-navbar")

var menuicon = document.querySelector(".fa-bars")

var closeicon = document.getElementById("side-navbar-close")


menuicon.addEventListener("click", function(){

    sidenav.style.marginLeft = "0px"

})


closeicon.addEventListener("click", function(){

    sidenav.style.marginLeft = "-60%"

})