coretechAsideLinks = document.querySelectorAll(".coretech-header_nav-a");
coretechAsides = document.querySelectorAll(".coretech-aside");
document.coretechAsides[0].addEventListener("click", function() {
    console.log("event listener working");
})

for (i=0; i<coretechAsides; i++) {
    document.coretechAsides[i].addEventListener("click", function() {
        revealDiv(coretechAsides[i]);
    })
}

function revealDiv (div) {
    div.style.display = "static";
}

function hideDiv (div) {
    div.style.display = "none";
}
