let popupMenu = null;

window.addEventListener("DOMContentLoaded", setup, false);

function setup() {
    document.addEventListener("click", createMenu, false);
}

function createMenu() {
    if (! popupMenu) {
        // Div created in memory but not attached to node tree.
        let menuDiv = document.createElement("div");

        menuDiv.style.position = "absolute";
        menuDiv.style.top = "50px";
        menuDiv.style.left = "100px";
        menuDiv.style.width = "200px";
        menuDiv.style.height = "200px";
        menuDiv.style.borderRadius = "100px";
        menuDiv.style.backgroundColor = "gray";

        popupMenu = document.documentElement.appendChild(menuDiv);
    }
}
