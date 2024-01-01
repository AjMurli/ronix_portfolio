const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });

     $(document).ready(function () {
      // Tooltip content
      var tooltipContent = "Home";
  
      // Create and append tooltip
      var tooltip = $('<div class="tooltip">' + tooltipContent + '</div>');
      $('.fa-solid.fa-house').append(tooltip);
  });
  

  // 
  document.addEventListener("DOMContentLoaded", function () {
    var aboutMeSection = document.getElementById("about-me");

    document.querySelector(".nav-link").addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      aboutMeSection.style.display = "flex";
    });
  });