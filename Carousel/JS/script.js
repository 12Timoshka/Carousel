const imgs = [
    'Images/carousel_pic1.png',
    'Images/carousel_pic2.png',
    'Images/carousel_pic3.png',
];
const btns = [
    'btn0',
    'btn1',
    'btn2',
]

let index = 0;


function prev() {
    index--;
    if (index < 0) {
        index = imgs.length - 1;
    }
    loaded();
}

function next() {
    index++;
    if (index > imgs.length - 1) {
        index = 0;
    }
    loaded();
}

function select(count) {
    index = count;

    loaded();
}

document.addEventListener('DOMContentLoaded', loaded.bind(this));

function loaded() {
    const img = document.querySelector('.img');
    const btn = document.querySelector('#btn' + index);
    const btnOld = document.querySelector('.nav_btn.active');

    img.src = imgs[index];
    if (btnOld != null) {
        btnOld.classList.remove('active');
    }
    btn.classList.add('active');
}