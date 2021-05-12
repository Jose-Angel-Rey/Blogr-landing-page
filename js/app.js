const hamburguerNav = document.querySelector(".main-nav__hamburger-icon");
const accordionItems = document.querySelectorAll(".main-nav__accordion-item-title")

loadEvents();
function loadEvents() {
  // Show or hidde menu
  hamburguerNav.addEventListener("click", showMenu);

  //Accordion
  accordionEffect();
}

// Show or hidde menu
function showMenu() {
    if (!hamburguerNav.nextElementSibling.classList.contains("main-nav--show")) {
      hamburguerNav.src = "./images/icon-close.svg";
      hamburguerNav.nextElementSibling.classList.add("main-nav--show");
    } else {
      hamburguerNav.src = "./images/icon-hamburger.svg";
      hamburguerNav.nextElementSibling.classList.remove("main-nav--show");
    }  
}

// Accordion
function accordionEffect() {
    accordionItems.forEach(item => {
         console.log(item);
         item.addEventListener("click", () =>{
             console.log(item.nextElementSibling);
         })
    })    
}