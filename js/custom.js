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



function setupScrollButton(button, targetElement) {

    if(button.length > 0){
        button.forEach((btn) => {
            btn.addEventListener('click', function() {
                // Scroll the target element into view
                targetElement.scrollIntoView({
                  behavior: 'smooth', // Smooth scroll
                  block: 'start'      // Align to the top of the viewport
                });
              });
        })
    }
    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Scroll the target element into view
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start'      // Align to the top of the viewport
      });
    });
  }
  
  // Usage example:
  // Assuming you have a button with id 'myButton' and a target element with id 'myTargetElement'
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelectorAll('.to-about');
    const targetElement = document.getElementById('about-container');
  
    setupScrollButton(button, targetElement);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelectorAll('.to-contact');
    const targetElement = document.getElementById('contact');
  
    setupScrollButton(button, targetElement);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelectorAll('.to-offices');
    const targetElement = document.getElementById('sale-container');
  
    setupScrollButton(button, targetElement);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.to-us');
    const targetElement = document.getElementById('us-container');
  
    setupScrollButton(button, targetElement);
  });
  