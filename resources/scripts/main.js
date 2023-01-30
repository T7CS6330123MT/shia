// DOMContentLoaded - for one time till browser clears cached memory.
// load - for every time the browser refreshes the page.
document.addEventListener("readystatechange", function() {

    // Initial Page Settings
    if (document.readyState === "complete") {

        if(typeof(Storage) !== "undefined") {

            // Check if there is a current session running
            if(!sessionStorage.getItem("currentSession")){
                sessionStorage.setItem("currentSession", "1");
            } else {
                sessionStorage.clear();
            }

        }else {
            // Entering this case means the browser doesn't support session storage
            alert("Your browser does not support web storage...");
        }
    }

}, false);