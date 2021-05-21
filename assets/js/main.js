// Function to fix the navbar toggle
// button in mobile nav menu
document
  .getElementById("menu-button-toggler")
  .addEventListener("click", function () {
    const navBarToggler = document.getElementById("toggle-nav");
    if (navBarToggler.getAttribute("data-nav-menu-open") === null) {
      navBarToggler.setAttribute("data-nav-menu-open", 1);
    } else {
      navBarToggler.removeAttribute("data-nav-menu-open");
    }
  });
