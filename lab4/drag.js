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
    }
}

function dragStart() {
    icon.style.borderStyle = "solid";
}

function dragEnd() {
    icon.style.borderStyle = "none";
}
