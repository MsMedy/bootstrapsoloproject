// boilerplate Bootstrap code for carousel feature
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

const navE1 = document.querySelector('.navbar');

window.addEventListener('scroll', () => { 
  if(window.scrollY >= 56) {
    navE1.classList.add('navbar-scroll');
  }
  else if(window.scrollY < 56){
    navE1.classList.remove('navbar-scroll');
  }
});