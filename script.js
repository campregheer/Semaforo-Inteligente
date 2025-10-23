document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;

    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');
    const btnRed = document.getElementById('btnRed');  
    const btnYellow = document.getElementById('btnYellow');
    const btnGreen = document.getElementById('btnGreen');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const intervalRange = document.getElementById('IntervalRange');

    const lights = [redLight, yellowLight, greenLight];

    const range = document.getElementById('IntervalRange');
    const bubble = document.getElementById('bubble');

    range.addEventListener('input', () => {
    const val = range.value;
    const max = range.max;
    const min = range.min;
    const percent = ((val - min) * 100) / (max - min);

    bubble.textContent = val;
    bubble.style.left = `${percent}%`;
    });

    function turnOffLights() {
        lights.forEach(light => light.style.opacity = '0.3');
    }

    function TurnOnlights() {
        lights.forEach(light => light.style.opacity = '1');
    }

    function turnOnLight(light) {
        turnOffLights();
        light.style.opacity = '1';
    }

    btnRed.addEventListener('click', () => turnOnLight(redLight));
    btnYellow.addEventListener("click", () => turnOnLight(yellowLight));
    btnGreen.addEventListener("click", () => turnOnLight(greenLight));

    let intervalId = null;

    startButton.addEventListener("click", () => {
        if (intervalId) return; 
        let currentIndex = 0;
        intervalId = setInterval(() => {
            turnOnLight(lights[currentIndex]);
            currentIndex = (currentIndex + 1) % lights.length;
        }, intervalRange.value
    )
    })
    stopButton.addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = null;
        TurnOnlights();
    })

});