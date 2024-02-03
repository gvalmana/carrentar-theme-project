document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los elementos con la clase "card-car"
    var cardCarElements = document.querySelectorAll(".card-car");

    // Itera sobre cada elemento y agrega los listeners
    cardCarElements.forEach(function(element) {
        // Agrega el listener para el evento mouseenter
        element.addEventListener("mouseenter", function() {
            // Agrega las clases "z-3" y "shadow" al hacer hover
            element.classList.add("z-1", "shadow-sm");
        });

        // Agrega el listener para el evento mouseleave
        element.addEventListener("mouseleave", function() {
            // Elimina las clases "z-3" y "shadow" al salir del hover
            element.classList.remove("z-1", "shadow-sm");
        });
    });
});

function scrollTop() {
    // Función para mostrar u ocultar el botón de scroll
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector('.scrollup').style.display = "block";
        } else {
            document.querySelector('.scrollup').style.display = "none";
        }
    };

    // Función para hacer scroll suave al principio de la página al hacer clic en el botón de scroll
    document.querySelector('.scrollup').onclick = function() {
        scrollToTop(200); // Duración del scroll suave en milisegundos
        return false;
    };

    // Función para realizar el scroll suave
    function scrollToTop(duration) {
        var start = window.pageYOffset,
            startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime(),
                time = Math.min(1, ((now - startTime) / duration)),
                easedTime = easeInOutQuad(time);

            window.scroll(0, Math.ceil((easedTime * (0 - start)) + start));

            if (time < 1) requestAnimationFrame(scroll);
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(scroll);
    }
}

scrollTop();