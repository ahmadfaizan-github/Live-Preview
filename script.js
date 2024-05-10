function preview() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let livePreview = document.getElementById("output");

    livePreview.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "<style>";
} 

document.getElementById("html-code").addEventListener('input', preview);
document.getElementById("css-code").addEventListener('input', preview);