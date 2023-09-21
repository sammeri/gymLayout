
let offset = 0;

const sliderLine = document.querySelector('.slider__line');
const photos = document.querySelectorAll('.photo');
const sliderCounter = document.querySelectorAll('.slider__counter__item');

document.querySelector('.slider__button_right').addEventListener('click', function () {
    offset > photos.length - 2 ? offset = 0 : offset += 1;

    sliderLine.style.transform = `translateX(${offset * -100}%)`;

    if (offset !== 0) {
        sliderCounter[offset - 1].classList.remove('active');
    } else {
        sliderCounter[photos.length - 1].classList.remove('active');
    }

    sliderCounter[offset].classList.add('active');
})

document.querySelector('.slider__button_left').addEventListener('click', function () {
    if (offset !== 0) {
        offset -= 1;
    } else {
        offset = photos.length - 1;
    }

    sliderLine.style.transform = `translateX(${offset * -100}%)`;

    if (offset === photos.length - 1) {
        sliderCounter[0].classList.remove('active');
    } else {
        sliderCounter[offset + 1].classList.remove('active');
    }

    sliderCounter[offset].classList.add('active');
})

