function openEvent(evt, tabName) {
    var i, tabContent, headTab;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    headTab = document.getElementsByClassName("headTab");
    for (i = 0; i < headTab.length; i++) {
        headTab[i].className = headTab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    document.body.scrollTop = 0;
}
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}