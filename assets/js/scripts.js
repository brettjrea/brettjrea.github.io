// Readd transitions
document.addEventListener("DOMContentLoaded",function(){
  let node = document.querySelector('.preload-transitions');
  node.classList.remove('preload-transitions');
});

// Toggle theme
document.addEventListener('turbolinks:load', themeChange);
  
function themeChange(){
    // Select our toggle button
    let button = document.querySelector('.theme-toggle');

    // Add an event listener for a click
    button.addEventListener('click', function(e){
        // Check the current data-theme value
        let currentTheme = document.documentElement.getAttribute('data-theme');
        if(currentTheme === 'light') {
            transition();
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem("theme", "dark");
            localStorage.setItem("checkbox", "checked");
        } else {
            transition();
            document.documentElement.setAttribute('data-theme','light');
            localStorage.setItem("theme", "light");
            localStorage.setItem("checkbox", "unchecked");
        }
    });

     // Adds the 'transition' class to <html> for CSS fun
    let transition = () =>{
        document.documentElement.classList.add('transition');
        window.setTimeout(()=>{
            document.documentElement.classList.remove('transition');
        }, 1000);
    }
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// Toggle sidenav
function toggleNav() {
    var x = document.getElementById("theSidenav").style;
    var y = document.getElementById("theContent").style;
    
    if (x.width == "0vw")
    {
        x.width = "20vw";
        y.marginLeft = "20vw";
        localStorage.setItem("sidenav", "opened");
    }
    else 
    {
        x.width = "0vw";
        y.marginLeft = "0vw";
        localStorage.setItem("sidenav", "closed");
    }
}

// Touch sidenav
var container = document.querySelector("#theContent");

    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);

    // Left / Right
    var initialX = null;
    var initialY = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    };

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;

      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          // swiped left
          document.getElementById("theSidenav").style.width = "0vw";
          document.getElementById("theContent").style.marginLeft = "0vw";
          localStorage.setItem("sidenav", "closed");
          console.log("swiped left");
        } else {
          // swiped right
          document.getElementById("theSidenav").style.width = "20vw";
          document.getElementById("theContent").style.marginLeft = "20vw";
          localStorage.setItem("sidenav", "opened");
          console.log("swiped right");
        }  
      } 
      initialX = null;
      initialY = null;
      
    };