const intervalo = 4000;

function slide1(){
    document.getElementById('banner').src='carrossel.jpeg';
    setTimeout('slide2()', intervalo);
}

function slide2() {
    document.getElementById('banner').src='carrossel4.jpeg';
    setTimeout('slide3()', intervalo);
}

function slide3() {
    document.getElementById('banner').src='carrossel3.jpg';
    setTimeout('slide4()', intervalo);
}

function slide4() {
    document.getElementById('banner').src='carrossel5.jpeg';
    setTimeout('slide5()', intervalo);
}

function slide5() {
    document.getElementById('banner').src='carrossel6.jpeg';
    setTimeout('slide1()', intervalo);
}