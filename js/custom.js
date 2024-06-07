// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}


function closeNav() {
    document.querySelectorAll(".overlay-content a").forEach(a => a.addEventListener("click", () => {
        document.getElementById("myNav").classList.toggle("menu_width")

    }))
}

closeNav();

