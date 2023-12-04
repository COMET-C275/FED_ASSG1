// This is the javascript code for the slideshow

document.addEventListener("DOMContentLoaded", function () {
    var counter = 1;
    // Adjust the interval time in milliseconds (4000ms = 4 seconds)
    var interval = 4000; 

    function autoSlide() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 5) {
            counter = 1;
        }
    }

    setInterval(autoSlide, interval);
});