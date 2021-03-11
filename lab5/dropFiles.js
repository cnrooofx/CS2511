var target = null;

window.addEventListener("DOMContentLoaded", setupEvents, false);

function setupEvents() {
    if (window.File && window.FileList && window.FileReader) {
        target = document.getElementById("dropArea");
        target.addEventListener("dragenter", dragEnter, false);
        target.addEventListener("dragover", dragOver, false);
        target.addEventListener("dragleave", dragLeave, false);
        target.addEventListener("drop", dropFile, false);
    } else  {
        alert("HTML 5 File API not supported");
    }
}

function dragEnter(event) {
    event.stopPropagation();  // 
    event.preventDefault();
    target.style.backgroundColor = "orange";
}

function dragLeave(event) {
    event.stopPropagation();
    event.preventDefault();
    target.style.backgroundColor = "lightgray";
}

function dragOver(event) {
    event.stopPropagation();
    event.preventDefault();
}

function dropFile(event) {
    event.stopPropagation();
    event.preventDefault();
    target.style.backgroundColor = "lightgray";

    var files_info = document.getElementById("displayArea").value
    var files_list = event.dataTransfer.files;

    for (let i = 0; i < files_list.length; i++) {
        var file = files_list[i]
        files_info += file.name + " - Size: " + file.size + " bytes | Type: " + file.type + "\n"
    }
    document.getElementById("displayArea").value = files_info
}
