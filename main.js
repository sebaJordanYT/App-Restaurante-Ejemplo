/*
Para la frase con autoscroll en vez de repetir el div de html para que parezca infinito puedo hacer esta función que clona
(es decir solo dejaría un div)

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy);
*/


/*Para el mensaje de confirmacion en el formulario*/
document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Aquí puedes agregar lógica para enviar el formulario al servidor si es necesario

    document.getElementById("success-message").style.display = "block";
  
    setTimeout(function () {
      document.getElementById("success-message").style.display = "none";
    }, 3000);
  });  
  
/*Para el efecto parallax*/
let parallax = document.querySelector('.parallax-js');

function scrollParallax(){
  let scrollTop = document.documentElement.scrollTop;//scrillTop es la cantidad que baje al hacer scroll
  requestAnimationFrame(() => {
    parallax.style.transform = 'translateY(' + scrollTop + 'px)';
  });
}

window.addEventListener('scroll', scrollParallax);