let menuDiv = null;
let popupMenu = null;
let menuVisible = false;
let selectedIcon = null;

window.addEventListener("DOMContentLoaded", setup, false);

function setup() {
    document.addEventListener("click", openMenu, false);
}

function openMenu(event) {
    if (! menuDiv) {
        menuDiv = document.createElement("div");
        menuDiv.id = "menuDiv";
        menuDiv.style.height = "120px";
        menuDiv.style.width = "120px";

        let xOff = parseInt(menuDiv.style.width) / 2;
        let yOff = parseInt(menuDiv.style.height) / 5;
        addIcon(xOff, yOff, 1);
        xOff = (parseInt(menuDiv.style.height) / 5) * 4;
        yOff = parseInt(menuDiv.style.width) / 2;
        addIcon(xOff, yOff, 2);
        xOff = parseInt(menuDiv.style.height) / 2;
        yOff = (parseInt(menuDiv.style.width) / 5) * 4;
        addIcon(xOff, yOff, 3);
        xOff = parseInt(menuDiv.style.height) / 5;
        yOff = parseInt(menuDiv.style.width) / 2;
        addIcon(xOff, yOff, 4);
    }
    if (! menuVisible) {
        let divWidth = parseInt(menuDiv.style.width);
        let divHeight = parseInt(menuDiv.style.height);

        menuDiv.style.top = (parseInt(event.clientY) - divWidth / 2) + "px";
        menuDiv.style.left = (parseInt(event.clientX) - divHeight / 2) + "px";

        popupMenu = document.documentElement.appendChild(menuDiv);
        popupMenu.addEventListener("click", closeMenu, false);

        document.removeEventListener("click", openMenu);
        document.addEventListener("click", activateIcon, false);

        menuVisible = true;
    }
}

function addIcon(x, y, id) {
    let size = 25;
    let iconDiv = document.createElement("div");
    iconDiv.id = "icon" + id;
    iconDiv.className = "iconDiv";
    iconDiv.innerHTML = id;

    iconDiv.style.height = size + "px";
    iconDiv.style.width = size + "px";
    iconDiv.style.left = (x - size / 2) + "px";
    iconDiv.style.top = (y - size / 2) + "px";

    let newIcon = menuDiv.appendChild(iconDiv);
    newIcon.addEventListener("mouseover", selectIcon, false);
    
}

function selectIcon(event) {
    let iconID = event.target.id;
    if (selectedIcon !== iconID && selectedIcon !== null) {
        clearIcon()
    }
    let icon = document.getElementById(iconID);
    icon.style.backgroundColor = "blue";
    icon.style.color = "white";
    selectedIcon = iconID;
}

function clearIcon() {
    let prevSelected = document.getElementById(selectedIcon);
    prevSelected.style.backgroundColor = "white";
    prevSelected.style.color = "black";
}

function closeMenu(event) {
    event.preventDefault();
    event.stopPropagation();

    document.removeEventListener("click", activateIcon);
    document.addEventListener("click", openMenu, false);
    document.documentElement.removeChild(popupMenu);
    menuVisible = false;
}

function activateIcon(event) {
    alert('Selected icon = ' + selectedIcon);
    clearIcon()
    closeMenu(event);
    selectedIcon = null;
}
