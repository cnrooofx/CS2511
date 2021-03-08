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

    var left = parseInt(selectedDiv.style.left);
    var top = parseInt(selectedDiv.style.top);

    console.log(event);
    console.log(top);

    if (isNaN(left)) {
        hOffset = 0
    } else {
        hOffset = (parseInt(event.clientX) - left);
    }
    if (isNaN(top)) {
        vOffset = 0
    } else {
        vOffset = (parseInt(event.clientY) - top);
    }
    return false;
}

function dragDiv(event) {
    selectedDiv.style.left = (parseInt(event.clientX) - hOffset) + 'px';
    selectedDiv.style.top = (parseInt(event.clientY) - vOffset) + 'px';
    return false;
}

function stopDrag() {
    selectedDiv.style.zIndex = 0;
    document.removeEventListener('mousemove', dragDiv, false);
    document.removeEventListener('mouseup', stopDrag, false);
}
