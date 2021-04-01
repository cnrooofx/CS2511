let popupMenu = null;

window.addEventListener("DOMContentLoaded", setup, false);

function setup() {
    document.addEventListener("click", createMenu, false);
}

function createMenu(event) {
    if (! popupMenu) {
        let menuDiv = document.createElement("div");
        menuDiv.id = "menuDiv";
        menuDiv.style.height = "100px";
        menuDiv.style.width = "100px";

        let divWidth = parseInt(menuDiv.style.width);
        let divHeight = parseInt(menuDiv.style.height);

        menuDiv.style.top = (parseInt(event.clientY) - divWidth / 2) + "px";
        menuDiv.style.left = (parseInt(event.clientX) - divHeight / 2) + "px";

        popupMenu = document.documentElement.appendChild(menuDiv);
        popupMenu.addEventListener("click", closeMenu, false);
    }
}

function closeMenu(event) {
    event.preventDefault();
    event.stopPropagation();

    document.documentElement.removeChild(popupMenu);
    popupMenu = null;
}
