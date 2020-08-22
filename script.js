
    var dropdownBtn = document.querySelector("#dropdown");
var menuContent = document.querySelector(".my-dropdown")
    
        // showParagraph.addEventListener("click", function() {
        // menu.classList.toggle("show")
        // })


    dropdownBtn.addEventListener("click", function () {
        if (menuContent.style.display==="") {
            menuContent.style.display="block";
        }else{
            menuContent.style.display=""
        }
    })
    

