'use strict';

//Slider
let slider = document.querySelector(".slider-container");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){
  width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform  1.5s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform  0s";
            contador=1;

        },1500)
    }
}

//barra progresivas
window.addEventListener('scroll',function(){
    let animacion = document.getElementById('ms');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);

    let tamañodePantalla = window.innerHeight;

    if (posicionObj1 < tamañodePantalla) {
        animacion.style.animation = 'mover 1s ease-out'
    }
});
window.addEventListener('scroll',function(){
    let animacion2 = document.getElementById('cc');
    let posicionObj2 = animacion2.getBoundingClientRect().top;
    

    let tamañodePantalla = window.innerHeight;

    if (posicionObj2 < tamañodePantalla) {
        animacion2.style.animation = 'move 1s ease-out'

    }
});
//galeria de videos 

var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click',()=>{

 play.classList.toggle('active');

if (play.paused) {
    play.play();
}else{
    play.pause();
    play.currentTime = 0;
}
})); 


//menu 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')
//mostrar
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
});
//ocultar
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
});
//menu activo
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //Active linkAction
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    //remove
    navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click',linkAction));
