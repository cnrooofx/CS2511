var target = null;

window.addEventListener("DOMContentLoaded", setupEvents, false);

function setupEvents() {
    if (window.File && window.FileList && window.FileReader) {
        target = document.getElementById("dropArea");
        target.addEventListener("dragenter", dragEnter, false);
        target.addEventListener("dragover", dragOver, false);
        target.addEventListener("dragleave", dragLeave, false);
        target.addEventListener("drop", dropFile, false);
    } else {
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

    var files = event.dataTransfer.files;
    if (files.length > 0) {
        handleFiles(files);
    }
}

function handleFiles(files_list) {
    var files_info = ""
    for (let i = 0; i < files_list.length; i++) {
        var file = files_list[i];
        files_info += file.name + " - Size: " + file.size + " bytes | Type: " + file.type + "\n";
    }
    document.getElementById("infoArea").value = files_info;

    var reader = new FileReader();
    reader.addEventListener("load", handleReaderLoad, false);
    reader.readAsDataURL(files_list[0]);
}

function handleReaderLoad(event) {
    let displayArea = document.getElementById("displayArea");
    displayArea.src = event.target.result;
}
