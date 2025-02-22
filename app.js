//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Se inicializan las variables globales:
let listaAmigos = [];
//console.log(listaAmigos); => Valida que la lista "listaAmigos" donde se almacenan los nombres ingresados esté vacía.
let listaNombresMostrados = document.getElementById("listaAmigos");
let listaNombresSorteados = [];
let indiceSorteado = "";
let nombreSorteado = "";
let nombreMostrado = document.getElementById("resultado");

//La función "agregarAmigo()" agrega un nombre a la lista "listaAmigos" mientras se cumplan dos condiciones:
    //1) Que no haya una cadena de texto vacía ("") y
    //2) Que se cumpla la expresión irregular (regex)
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim(); //=> Se indica al programa que los nombres ingresados deben almacenarse en la variable "nombreAmigo" y que no deben tener espacion al inicio o al final.
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; //=> Se indica al programa que solamete puede aceptar letras de la "a" a la "z" en mayúsculas y minúsculas, también acepta acentos en las vocales, la letra "ñ", al menos un carácter y varios espacios. 
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        
    } else if (!regex.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios.");
        
    } else {
        nombreAmigo = nombreAmigo.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
        listaAmigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        actualizarLista();
    };

    //console.log(listaAmigos);=> Válida que los nombres se estén agregando a la lista "listaAmigos".

    return;
};

//La función "actualizarLista()" muestra, a través del DOM, los nombres que han sido registrados y agregados a la lista  "listaAmigos":
function actualizarLista() {
    listaNombresMostrados.innerHTML = ""; 

    let i = 0;
    let finalLista = listaAmigos.length -1;

    while (i <= finalLista) {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = listaAmigos[i];           //=> El bucle "while" itera sobre toda la lista "listaAmigos" para asegurarse de que se muestren todos los nombres que se encuentran en ella.
        listaNombresMostrados.appendChild(listaNombre);
        i++;
    };

    return;
};

//La función "sortearAmigo()" sortea un nombre de la lista "listaAmigos" mientras se cumplan dos condiciones:
    //1) Que la lista "listaAmigos" no esté vacía y
    //2) Que aún existan nombres que no hayan sido sorteados previamente
//Además, almacena los nombres sorteados en la lista "listaNombresSorteados"
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay ningún nombre disponible.");

        return;

    } else if (listaNombresSorteados.length === listaAmigos.length) {
        alert("Todos los nombres han sido sorteados.");
        reiniciarPrograma(); //=> Si todos los nombres fueron sorteados, entonces se reinicia el programa.

        return;
        
    } else {

    while (nombreSorteado === "" || listaNombresSorteados.includes(nombreSorteado)) {
        indiceSorteado = Math.floor(Math.random() * listaAmigos.length);                //=> El bucle "while" se asegura de que el nombre sorteado nunca sea el mismo. 
        nombreSorteado = listaAmigos[indiceSorteado];
    };

    listaNombresSorteados.push(nombreSorteado); 
    //console.log(listaNombresSorteados); => Válida que los nombres sorteados se agreguen correctamente a la lista "listaNombresSorteados".
    
    nombreMostrado.innerHTML = nombreSorteado;

    listaNombresMostrados.innerHTML = ""; 
    };

    return;
};

//La función "reiniciarPrograma()" restablece el programa a sus condiciones iniciales:
function reiniciarPrograma(){
    indiceSorteado = "";

    nombreSorteado = "";
    nombreMostrado.innerHTML = "";

    listaAmigos = [];
    listaNombresSorteados = [];
}; 
