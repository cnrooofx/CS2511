var myDiv = null;
var hOffset, vOffset = 0;

window.addEventListener('DOMContentLoaded', setupEvents, false);

function setupEvents() {
    myDiv = document.getElementById('div0');
    myDiv.addEventListener('mousedown', startDrag, false);
}

function startDrag(event) {
    document.addEventListener('mousemove', dragDiv, false);
    document.addEventListener('mouseup', stopDrag, false);
    hOffset = parseInt(event.clientX) - parseInt(myDiv.style.left);
    vOffset = parseInt(event.clientY) - parseInt(myDiv.style.top);
    return false;
}

function dragDiv(event) {
    myDiv.style.left = (parseInt(event.clientX) - hOffset) + 'px';
    myDiv.style.top = (parseInt(event.clientY) - vOffset) + 'px';
    return false;
}

function stopDrag() {
    document.removeEventListener('mousemove', dragDiv, false);
    document.removeEventListener('mouseup', stopDrag, false);
}
