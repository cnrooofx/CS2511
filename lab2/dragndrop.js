var myDiv = null;

window.addEventListener('DOMContentLoaded', setupEvents, false);

function setupEvents() {
    myDiv = document.getElementById('div0');
    myDiv.addEventListener('mousedown', startDrag, false);
}

function startDrag() {
    document.addEventListener('mousemove', dragDiv, false);
    document.addEventListener('mouseup', stopDrag, false);
    return false;
}

function dragDiv(event) {
    myDiv.style.left = parseInt(event.clientX) + 'px';
    myDiv.style.top = parseInt(event.clientY) + 'px';
    return false;
}

function stopDrag() {
    document.removeEventListener('mousemove', dragDiv, false);
    document.removeEventListener('mouseup', stopDrag, false);
}
