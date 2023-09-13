// JavaScript to toggle dropdown visibility
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

var img = document.getElementById('img');
var slides = ['/img/oficina1.jpg', '/img/oficina2.jpg', '/img/oficina3.jpg', '/img/oficina4.jpg', '/img/oficina5.jpg', '/img/oficina6.jpg'];
var fadeInDuration = 7000; // Duration of the fade transition in milliseconds
var start = 0;

function fadeIn(element) {
  var op = 0.1;
  element.style.opacity = op;

  var fadeInInterval = setInterval(function () {
    if (op >= 1) {
      clearInterval(fadeInInterval);
    }
    element.style.opacity = op;
    op += 0.5;
  }, fadeInDuration / 130);
}


function slider(direction = 1) {
  if (start < slides.length && start >= 0) {
    start += direction;
  } else if (start < 0) {
    start = slides.length - 1;
  } else {
    start = 0;
  }

  var newImg = new Image();
  newImg.src = slides[start];

  newImg.onload = function () {
    img.innerHTML = ''; // Eliminar contenido anterior
    img.appendChild(newImg);
    fadeIn(newImg); // Aplicar la transición de fade a la nueva imagen
    updateIndicators(); // Actualizar los marcadores de puntos
  };
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.slide-indicators .indicator');
  
  indicators.forEach((indicator, index) => {
    if (index === start) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

prevArrow.addEventListener("click", function () {
  slider(-1); // Cambia a la imagen anterior (izquierda)
});

nextArrow.addEventListener("click", function () {
  slider(1); // Cambia a la siguiente imagen (derecha)
});

setInterval(slider, 5000);
