//1) Crea un Objeto que contenga información sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales (autor,año de publicación u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

let biblioteca = {
  "Libro 1": {
    autor: "Autor A",
    añoPublicacion: 2000,
  },
  "Libro 2": {
    autor: "Autor B",
    añoPublicacion: 2001,
  },
  "Libro 3": {
    autor: "Autor C",
    añoPublicacion: 2002,
  },
};

for (let i in biblioteca) {
  let libro = biblioteca[i];
  console.log("Titulo: " + i);
  console.log("Autor: " + libro.autor);
}

//2) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre y la ciudad de cada persona.

let personas = [
  {
    nombre: "Juan Perez",
    edad: 30,
    ciudad: "Barquisimeto",
  },
  {
    nombre: "Jose Barboza",
    edad: 17,
    ciudad: "Maracaibo",
  },
  {
    nombre: "Andrea Fernandez",
    edad: 25,
    ciudad: "Barcelona",
  },
];

for (let persona of personas) {
  console.log("Nombre: " + persona.nombre);
  console.log("Ciudad: " + persona.ciudad);
}

//3) Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero máximo de intentos. (Investigar Math.random).

/*
let palabras = [
  "casa",
  "mesa",
  "computadora",
  "ventana",
  "ratón",
  "teclado",
  "cama",
  "estufa",
  "televisión",
  "perro",
];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraSecreta = "_ ".repeat(palabra.length);
let intentos = 50;
let letrasIncorrectas = " ";

console.log("¡Ahora tienes que adivinar la palabra letra por letra!");
console.log("La palabra es: " + palabraSecreta);

do {
  let letra = prompt(
    `Adivina una letra de la palabra secreta (tienes ${intentos} intentos restantes)` 
  );

  if (letrasIncorrectas.includes(letra)) {
    console.log(
      "La letra '" +
        letra +
        "' ya fue intentada anteriormente. Por favor, intente de nuevo."
    );
  } else if (palabra.includes(letra)) {
    console.log(
      `¡Correcto! La letra ${letra} se encuentra en la palabra secreta.`
    );

    letraSecreta = "";
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) {
        letraSecreta += letra;
      } else {
        letraSecreta += palabraSecreta[i];
      }
    }

    palabraSecreta = letraSecreta;

    if (!palabraSecreta.includes("_")) {
      console.log("¡Felicidades! La palabra secreta es: " + palabraSecreta);
      break;
    }
  } else {
    console.log(
      `¡Incorrecto! La letra ${letra} no se encuentra en la palabra secreta.`
    );
    intentos--;
    letrasIncorrectas += letra + ", ";
  }
} while (intentos > 0);

if (intentos === 0) {
  console.log(
    `¡Lo siento! Has agotado tus intentos. La palabra secreta era ${palabra}`
  );
}
*/

//4) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parámetros (nombre y edad). La clase debe tener un método "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola! Mi nombre es ${this.nombre}`;
  }
}

let persona = new Persona("Jose Barboza", 15);
console.log(persona.saludar());

//5) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un parámetro (curso). Agregar un método "presentar" a la clase "Estudiante" que incluya la información del nombre,edad y curso.

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  presentar() {
    return `Hola! Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy del curso ${this.curso}.`;
  }
}

let Estudiante1 = new Estudiante("Jose Barboza", 17, "O-121");

console.log(Estudiante1.presentar());

//6) Crea una función que tome una cadena de texto y dos palabras como argumentos (parámetros), y reemplace todas las ocurrencias de la primera palabra con la segunda palabra.

function Replace(texto, palabra1, palabra2) {
  return texto.replace(palabra1, palabra2);
}

let texto = "Hola, me llamo Jose";
let palabra1 = "Jose";
let palabra2 = "Andres";

let textoReemplazado = Replace(texto, palabra1, palabra2);

console.log(textoReemplazado);


//7) Escribe una función que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

function filterAdultos(personas) {
  return personas.filter((persona) => persona.edad >= 18);
}

let arrayPersonas = [
  { nombre: "Ana", edad: 25},
  { nombre: "Pedro", edad: 18},
  { nombre: "María", edad: 30},
  { nombre: "Sara", edad: 15},
];

let adultos = filterAdultos(arrayPersonas);
console.log(adultos);

//8) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.
ejercicio8 = [
  {nombre: "Luis", edad: 33, hobbies: ["videojuegos", "musica" , "cine"]},
  {nombre: "Juanito", edad: 30},
   {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}
  ]

for (let i = 0; i < ejercicio8.length; i++) {
  console.log(ejercicio8[i])
}

//9) Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años.

ejercicio8.push({ nombre: "Maria", edad: 25 });
console.log(ejercicio8)


//10) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.

for (let i = 0; i < ejercicio8.length; i++) {
  if (ejercicio8[i].nombre === "Pedro"){
    delete ejercicio8[i].hobbies;
  }
}

console.log(ejercicio8)


//11) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".

for (let i = 0; i < ejercicio8.length; i++){
  if (ejercicio8[i].nombre === "Juanito") {
    ejercicio8[i].hobbies = ["diseñar"]
  }
}

console.log(ejercicio8)

/*12) Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:
       
*/
//* La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.
class Inventario {
  constructor() {
    this.productos = [];
  }

  //* Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá agregar un objeto producto al arreglo productos con los datos proporcionados.

  agregarProducto(nombre, precio, cantidad) {
    const producto = { nombre, precio, cantidad };
    this.productos.push(producto);
  }

  //* Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la cantidad para cada producto en el arreglo y sumándolos.

  calcularValorTotal() {
    let total = 0;
    this.productos.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  }

  //* Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada producto (nombre, precio y cantidad).

  listarProductos() {
    this.productos.forEach((producto) => {
      console.log(
        `Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`
      );
    });
  }
}

//* Crea una instancia de la clase "Inventario" llamada miInventario.
const miInventario = new Inventario();

//* Agrega al menos tres productos a miInventario utilizando el método agregarProducto.
miInventario.agregarProducto("Producto 1", 100, 5);
miInventario.agregarProducto("Producto 2", 200, 3);
miInventario.agregarProducto("Producto 3", 300, 7);

//* Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.
miInventario.listarProductos();


//* Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.
const valorTotal = miInventario.calcularValorTotal();
console.log(`Valor total del inventario: ${valorTotal}`);