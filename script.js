document.documentElement.style.cursor = 'none';

  // Mouse Over
  const cursor = document.querySelector(".cursor");
  var timeout;

  document.addEventListener("mousemove",(e) => {
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // Cursor Effect On MouseOut
  function mouseStopped() {
  cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
  });

  // Cursor Effect On Mouseout
  document.addEventListener("mouseout",() => {
    cursor.style.display = "none";
  });



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
  

  
  const bgAnimation = document.getElementById('bgAnimation');

  const numberOfColorBoxes = 400;
  
  for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.append(colorBox)
  }