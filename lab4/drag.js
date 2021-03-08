var icon, target = null;

window.addEventListener('DOMContentLoaded', setupEvents, false);

function setupEvents() {
    icon = document.getElementById('dragImage');
    icon.addEventListener('dragstart', dragStart, false);
    icon.addEventListener('dragend', dragEnd, false);

    target = document.getElementById('target');
    target.addEventListener('dragenter', dragEnter, false);
    target.addEventListener('dragover', dragOver, false);
    target.addEventListener('dragleave', dragLeave, false);
}

function dragStart() {
    icon.style.borderStyle = 'solid';
}

function dragEnd() {
    icon.style.borderStyle = 'none';
}
