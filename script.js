const slider = document.getElementById('slider');
let index = 1;

function moverSlider() {
    if (!slider) return;
    index++;
    if (index >= 7) index = 1;
    slider.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(moverSlider, 3000);
