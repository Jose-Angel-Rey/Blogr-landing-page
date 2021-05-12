const hamburguerNav = document.querySelector(".main-nav-container");


loadEvents()
function loadEvents() {
    hamburguerNav.addEventListener("click", showMenu)
}

function showMenu(e) {
    if(e.target.classList){
        console.log("activooooooooo");
    }
    
}