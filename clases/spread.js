//Destructuracion de objetos

const persona = {
  nombre: "juan cruz",
  apellido: "lopez",
  edad: 24,
};

/*console.log(persona.apellido);*/

const { nombre, edad } = persona;

/*console.log(nombre, edad);*/

//Destructuracion de arrays

const personajes = ["Teemo", "Garen", "Camille", "Viego"];

/*console.log(personajes[2]);*/

const [personaje1, personaje2, personaje3, personaje4] = personajes;

/*console.log(personaje3);*/

//Spread operator

//Desparramar las propiedades o metodos de un objeto

const personaExtended = {
  ...persona,
  puesto: "Front developer",
};

//Copia exacta de persona PERO en una posicion de memoria

const personaCopia = { ...persona };

/*console.log(personaExtended);*/

//funcion map, find
//Map es una funcion de arrays y procesa el array de alguna manera y devuelve un nuevo array

const personajesProcesados = personajes.map((personaje) => {
  return `<p>${personaje}</p>`;
});

console.log(personajesProcesados);

const personajeEncontrado = personajes.find(
  (personaje) => personaje === "Rompa"
);

console.log(personajeEncontrado);
