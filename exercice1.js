// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let stopButton = document.getElementById("stop-button");

function countUp() {
    let time = setTimeout(function () {
        seconds.innerHTML = (parseFloat(seconds.innerHTML) + 1).toString();
        countUp();
    }, 1000);

    let stopCountUp = function() {
        clearTimeout(time);
    };
    stopButton.addEventListener("click", stopCountUp);
}
countUp();