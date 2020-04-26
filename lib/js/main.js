coretechAsideLinks = document.getElementsByClassName("coretech-header_nav_span");
coretechAsides = document.getElementsByClassName("coretech-aside");
// console.log("asides: " + JSON.stringify(coretechAsides))
console.log("asides: " + JSON.stringify(coretechAsideLinks))
// coretechAsideLinks[0].addEventListener("click", function() {
    // })
    
    for (i=0; i<coretechAsideLinks.length; i++) {
        coretechAsideLinks[i].addEventListener("click", function() {
        element = this;    
        elementNum = getEventIndex(element);
        activeElementNum = null;    
        elementClasses = Array.from(this.classList);
        console.log(JSON.stringify(elementClasses));

        for (x=0; x<coretechAsideLinks.length ; x++) {
            // console.log("checking classes for active in: " + x);
            checkElementClassList = Array.from(coretechAsideLinks[x].classList)
            console.log(JSON.stringify(checkElementClassList));
            if (checkElementClassList.some(cssClass => cssClass === 'active')) {
                activeElementNum = x;
                console.log("current active is: " + activeElementNum);
                break;
            } 
        }
        console.log("clicked on: " + elementNum + " | The active element is: " + activeElementNum);
        if (elementNum === activeElementNum) {
            console.log("This is the current element.");
        } else {
            changeColorBlue(element);
            // console.log(coretechAsides[elementNum-1].innerHTML);

            revealDiv(elementNum);
        }
    })
}
function changeColorBlue (div) {
    div.style.color = "#0e77ff"
}
function changeColorBlack (div) {
    div.style.color = "black"
}
function changeWhite (div) {
    div.style.color = "#ffffff"
}

function revealDiv (element, div) {
    div.style.display = "flex";
}

function hideDiv (div) {
    div.style.display = "none";
}

function getEventIndex(event) {
    element = event;
    splitId = element.getAttribute("id").split("-");
    index = parseInt(splitId[splitId.length - 1]);
    console.log("index=" + index + " from ID: " + element.getAttribute("id"));
    return index;
}
