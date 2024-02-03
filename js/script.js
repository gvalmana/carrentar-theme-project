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