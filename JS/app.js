const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Slider 
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.slider-control');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  controls[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  controls[currentSlide].classList.add('active');
}

function changeSlide(index) {
  if (index !== currentSlide) {
    showSlide(index);
  }
}

for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener('click', function() {
    changeSlide(i);
  });
}

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  controls[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  controls[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000);

// Función para verificar si un elemento es visible en la pantalla
function isVisible(element) {
  var rect = element.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


// Función para animar los elementos visibles
function animateVisibleElements() {
  var animatedElements = document.querySelectorAll('.animated-text');

  animatedElements.forEach(function (element) {
    if (isVisible(element)) {
      element.classList.add('animate');
    }
  });
}

// Evento de desplazamiento para activar la animación cuando los elementos son visibles
window.addEventListener('scroll', animateVisibleElements);
window.addEventListener('resize', animateVisibleElements);

// Animar los elementos visibles al cargar la página
animateVisibleElements();


// Obtener todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

// Agregar un controlador de eventos de clic a cada tarjeta
tarjetas.forEach(function(tarjeta) {
  tarjeta.addEventListener('click', function() {
    const contenido = this.querySelector('.contenido');
    if (this.classList.contains('seleccionada')) {
      // Si la tarjeta ya está seleccionada, deseleccionarla
      this.classList.remove('seleccionada');
      contenido.style.display = 'none';
    } else {
      // Remover la clase 'seleccionada' de todas las tarjetas
      tarjetas.forEach(function(tarjeta) {
        tarjeta.classList.remove('seleccionada');
      });

      // Ocultar el contenido de todas las tarjetas
      const contenidos = document.querySelectorAll('.contenido');
      contenidos.forEach(function(contenido) {
        contenido.style.display = 'none';
      });

      // Agregar la clase 'seleccionada' a la tarjeta clicada
      this.classList.add('seleccionada');
      contenido.style.display = 'block';
    }
  });
});



