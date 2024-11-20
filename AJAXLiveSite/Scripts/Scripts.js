document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector(".ajax-load").addEventListener("click", function () {
        LoadAjax();
    });
});

function LoadAjax() {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.querySelector(".ajax-container").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/Home/AjaxRequest");
    xhr.send();
}