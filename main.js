let secondPage = document.querySelector("#pageTwo") 
let firstPage = document.querySelector("#first__page__wrapper")
let firstPageButton= document.querySelector("#btnClick")

// firstPageButton.addEventListener("click", function(){
//     firstPage.style.transition = "opacity 0.5s linear 0s";
//     alert("hide")
// })

function OpenSecondPage(){
firstPage.classList.add("fadeMe")
secondPage.classList.remove("fadeMe")
secondPage.classList.add("showMe")
    alert("0")
 }