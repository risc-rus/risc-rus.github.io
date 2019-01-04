function changeTitle(value) {
    document.getElementById("Title").innerHTML= value;
}

function changeHeight() {
    var doc_height = document.getElementById("miframe").contentDocument.body.offsetHeight;

    document.getElementById('miframe').style.height = doc_height + 40 + "px";
}
