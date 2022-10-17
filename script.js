console.log("page loaded...");

function play(element) {
    console.log('lala0');
    element.play();
}

function pause(element) {
    console.log('lala');
    element.pause();
    element.currentTime = 0;
}