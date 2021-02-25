var selectedDiv = null;
var hOffset, vOffset = 0;

window.addEventListener('DOMContentLoaded', setupEvents, false);

function setupEvents() {
    var allDivs = document.getElementsByTagName('div')

    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.zIndex = 0;
        allDivs[i].addEventListener('mousedown', startDrag, false);
    }
}

function startDrag(event) {
    document.addEventListener('mousemove', dragDiv, false);
    document.addEventListener('mouseup', stopDrag, false);
    selectedDiv = event.target;
    selectedDiv.style.zIndex = 1;

    // hOffset = parseInt(event.clientX) - parseInt(selectedDiv.style.left);
    // vOffset = parseInt(event.clientY) - parseInt(selectedDiv.style.top);
    return false;
}

function dragDiv(event) {
    selectedDiv.style.left = (parseInt(event.clientX)) + 'px';
    selectedDiv.style.top = (parseInt(event.clientY)) + 'px';
    return false;
}

function stopDrag() {
    selectedDiv.style.zIndex = 0;
    document.removeEventListener('mousemove', dragDiv, false);
    document.removeEventListener('mouseup', stopDrag, false);
}
