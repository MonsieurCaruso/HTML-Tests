let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("anywhere");
let input = document.getElementById("search-input");
let listItems= document.querySelectorAll(".dropdown-list-item");

//show dropdown list on click on dropdown
dropdownBtn.onclick = function () {
    //rotate arrow icon
    if(list.classList.contains("show")){
        icon.style.rotate = "-0deg";
    } else {
        icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");
};

