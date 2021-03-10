var icon, target = null;

window.addEventListener("DOMContentLoaded", setupEvents, false);

function setupEvents() {
    icon = document.getElementById("dragImage");
    icon.addEventListener("dragstart", dragStart, false);
    icon.addEventListener("dragend", dragEnd, false);

    var dropZones = document.getElementsByClassName("dropZone")

    for (let i = 0; i < dropZones.length; i++) {
        target = dropZones[i];

        target.addEventListener("dragenter", dragEnter, false);
        target.addEventListener("dragover", dragOver, false);
        target.addEventListener("dragleave", dragLeave, false);
        target.addEventListener("drop", dropIcon, false);
    }
}

function dragStart(event) {
    icon.style.opacity = 0.5;

    event.dataTransfer.setData("ID", event.target.id);
}

function dragEnd() {
    icon.style.opacity = 1;
}

function dragEnter(event) {
    target = event.target;
    target.style.backgroundColor = "yellow";
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
    target = event.target;
    target.style.backgroundColor = "gray";
}

function dropIcon(event) {
    event.preventDefault();

    var id = event.dataTransfer.getData("ID");
    event.target.appendChild(document.getElementById(id));
}
