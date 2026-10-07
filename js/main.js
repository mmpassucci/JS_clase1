//reserva de hotel
const precioNoche = 159.5;
let nombreUsuario = prompt("Escribe tu nombre");
let apellidoUsuario = prompt ("Ahora escribe tu apellido");
alert("Hola " + nombreUsuario + " " + apellidoUsuario);
let cantidadNoches = parseFloat(prompt("¿Cuántas noches te quedarás?"));

alert(nombreUsuario + " " + apellidoUsuario + " tu estadía de " + cantidadNoches + " noches es de $" + precioNoche * cantidadNoches + " pesos ");





