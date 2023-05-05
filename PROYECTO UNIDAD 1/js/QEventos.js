
// Preguntas
var preguntas = [
    "¿En qué mes se celebra el Carnaval de Oruro?",
    "¿Cuándo se conmemora la fiesta de la virgen de Urkupiña?",
    "¿En qué Fecha se celebra el año nuevo Aymara o Solsticio de invierno?",
    
];


var opciones = [
    ["Enero", "Febrero", "Marzo"],
    ["18 de septiembre", "15 de agosto", "28 de noviembre"],
    ["21 de Junio", "1 de Enero", "23 de Julio"],
    
   ]

var puntajePorOpcion = [
    [0, 10, 0],
    [0, 10, 0],
    [10, 0, 0]
  
]


var puntaje = 0;
var i = 0;

// Despliegue de los resultados
function mostrarResultado() {
    
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra-progreso").value = i * 100 / (preguntas.length - 1);

    
    div.innerHTML += "<h3 class='resultado_titulo'>Tus resultados</h3>";

    
    if (puntaje > 20) {
        respuestas = "<span id='estilo-excelente'>te fue excelente</span>";
    } else if (puntaje > 10) {
        respuestas = "<span id='estilo-aceptable'>te fue muy bien</span>";
    } else {
        respuestas = "<span id='estilo-regular'> debes visitar Bolivia</span>";
    } 


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} 
    puntos, lo cual significa que ${respuestas}.</p>`;
}

// Actualiza el puntaje acumulado según la respuesta seleccionada y avanza a la siguiente..
function actualizarPuntaje(opcion) {
    // Calcula el índice de la opción seleccionada
    var indice = opcion - 1;
    // Incrementa el puntaje acumulado con el valor correspondiente a la opción seleccionada
     puntaje += puntajePorOpcion[i][indice];

    i++
    // Si aún quedan preguntas por responder, muestra la siguiente pregunta
    if (i < preguntas.length) {
       
        siguientePregunta();
    } else { // Si no quedan preguntas, muestra los resultados
        mostrarResultado();
    }
}

// Muestra la siguiente pregunta y sus opciones
function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("opc1").innerHTML = opciones[i][0];
    document.getElementById("opc2").innerHTML = opciones[i][1];
    document.getElementById("opc3").innerHTML = opciones[i][2];
    
    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    
}

siguientePregunta();  // Muestra la primera pregunta
// Agrega a los elementos de las opciones para detectar cuando el usuario selecciona 
document.getElementById("opc1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("opc2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("opc3").addEventListener("click", function () {
    actualizarPuntaje(3);
});




