// Ejercicio 1: Tipos de Variables

let nombre = "Juan";
let edad = 25;
let activo = true;
let salario = null;

const showTypeOfVariables = () => {
  console.log(`Tipo de dato de nombre: ${typeof nombre}`);
  console.log(`Tipo de dato de edad: ${typeof edad}`);
  console.log(`Tipo de dato de activo: ${typeof activo}`);
  console.log(`Tipo de dato de salario: ${typeof salario}`);
}

showTypeOfVariables();

// Ejercicio 2: Concatenación de Strings

let segundoNombre = "Juan";
let apellido = "Pérez";

console.log(`Nombre completo: ${nombre} ${apellido}`);
console.log('Nombre completo: ' + nombre + ' ' + apellido);

// Ejercicio 3: Operaciones Matemáticas Básicas
const calculadora = (num1, num2) => {
  console.log(`Suma: ${num1 + num2}`);
  console.log(`Resta: ${num1 - num2}`);
  console.log(`Multiplicación: ${num1 * num2}`);
  console.log(`División: ${num1 / num2}`);
}

calculadora(10, 5);

// Ejercicio 4: Map - Duplicar Números

let numeros = [1, 2, 3, 4, 5];

let duplicados = numeros.map(num => num * 2);
console.log(`Números duplicados: ${duplicados}`);

// Ejercicio 5: Find - Buscar Elemento

let numerosSegundoEjercicio = [5, 8, 12, 3, 15, 7]

numerosSegundoEjercicio.find((num) => {
  if (num > 10) {
    console.log(`Número mayor que 10 encontrado: ${num}`);
    return true;
  }
  return false;
})

let numeroEcontrado = numerosSegundoEjercicio.find(num => num > 10) ;
console.log(`Número mayor que 10 encontrado: ${numeroEcontrado}`);

// Ejercicio 6: Operaciones con Strings

let palabraVocales = ['mayonesa', 'mantequilla', 'dormir'];
let vocales = 'aeiouAEIOU';

const vocalesContador = (arr) => {
  let resultados = [];

  for (let i = 0; i < arr.length; i++) {
    let palabra = arr[i];
    let contador = 0;

    for (let j = 0; j < palabra.length; j++) {
      let char = palabra[j];
      if (vocales.includes(char)) {
        contador++;
      }
    }

    resultados.push(`La palabra "${palabra}" tiene ${contador} vocales.`);
  }

  return resultados;
};

const resultados = vocalesContador(palabraVocales);
resultados.forEach(resultado => console.log(resultado));

// Ejercicio 7: Map con Objetos

let personas = [
  {nombre: "Ana", edad: 25},
  {nombre: "Luis", edad: 30},
  {nombre: "María", edad: 28}
]

let nombres = personas.map(nombre => nombre.edad > 25 ? nombre.nombre : null)
console.log(nombres)

// Ejercicio 8: Find con Condición Compleja

let personasSegunda = [
  {nombre: "Pedro", edad: 16},
  {nombre: "Ana", edad: 22},
  {nombre: "Carlos", edad: 17}
];

const personaResltado = personasSegunda.find((persona) => {
  if(persona.edad >= 18) {
    console.log(persona)
  }
  return false
})

// Ejercicio 9: Operaciones y Concatenación

const base = 17
const altura = 29

const calcularAreaRectangulo = () => {
  const resultadoArea = base * altura
  console.log(`El área de tu rectángulo  es ${resultadoArea} cm². `)
}

calcularAreaRectangulo()

// Ejercicio 10: Combinando Todo


let productos = [
  {nombre: "Laptop", precio: 800, enOferta: false},
  {nombre: "Mouse", precio: 25, enOferta: true},
  {nombre: "Teclado", precio: 60, enOferta: true}
];

const resultadoOferta = productos.find(producto => producto.enOferta);

if (resultadoOferta) {
  console.log(`¡Encontramos un producto en oferta para ti! ${resultadoOferta.nombre}, precio: ${resultadoOferta.precio}`);
} else {
  console.log("No hay productos en oferta.");
}

let mensajes = productos.map(producto =>
  producto.enOferta ? `${producto.nombre}: $${producto.precio} (¡En oferta!)` : `${producto.nombre}: $${producto.precio}`
);

console.log(mensajes);