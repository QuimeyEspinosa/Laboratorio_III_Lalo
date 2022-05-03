const obj = new Object();
const obj2= {};

const p1 = {
    nombre:"Juan",
    edad:20,
    sexo:"m",
    sueldo:20000,
    gustaMilanesa:true
}


const p2 = {
    nombre:"Eliana",
    edad:15,
    sexo:"m",
    sueldo:6000,
    gustaMilanesa:false
}
//puedo agregar propiedades con solo el .  y la propiedad
p2.materiasAprobadas=4;


console.log(p1);
console.log(p2);


//para copiar los elementos de un obj a uno nuevo
const p3 = Object.assign({},p2);
console.log(p3);
const p4 = {...p2}; 
const p5 = {};
Object.assign(p5,p4);

//la key es el nombre de la propiedad
for (const key in p3) {
    
    console.log(key);
}
//para poder acceder al valor de la propiedad
for (const key in p3) {
    console.log(p3[key]);
}

//para mostrar el nombre y el valor, hay que concatenarlos
for (const key in p3) {
    console.log(key,": "+p3[key]);
}
//hardcodeada
function Persona1(){
    this.nombre="Eliana",
    this.edad=15,
    this.sexo="m",
    this.sueldo=6000,
    this.gustaMilanesa=false
}

function Persona(nombre,sexo,edad,sueldo,gustaMilanesa)
{
    this.nombre=nombre;
    this.edad=edad;
    this.sexo=sexo;
    this.sueldo=sueldo;
    this.gustaMilanesa=gustaMilanesa;
}

const persona1 = new Persona1();
const personaParam = new Persona("Gonzalito","m",22,85000,true);

console.log("la persona es: ",persona1);

console.log("la persona nueva es: ",personaParam);

//Desestructurar

const persona2 = {...personaParam};


//genero variables de forma dinamica cargandole los valores de los atributos del objeto
//lo que si tiene que tener el mismo nombre que los atributos
//let {nombre,sexo,edad} = personaParam;

//console.log(nombre,sexo,edad);

//es lo mismo para un array, se guarda en la primer variable el primer elemento
//y asi se va guardando a medida que hay mas variables y mas elementos
const vec = [20,10,19];

let [x,y,z] = vec;

console.log(x,y,z);

//en este caso, en Q se guarda 28
//en W se guarda 18
//y en T se genera un array de la posicion del 29 hasta el final del array
const vec2 = [28,18,29,343,123,4,5,1];
let[q,w,...t] = vec2;
console.log(q,w,t);

//recibe un objeto y llamo a los atributos sin necesidad de utilizar el objeto que recibo

function UnaFuncion({nombre,edad,sexo})
{
    console.log(`te llamas ${nombre} , tenes ${edad} años y su sexo es ${sexo}`);
}
UnaFuncion(persona1);

UnaFuncion(personaParam);


//puede la function tener parametro y asignarle un valor si el parametro viene undefined
function Animal(tipo,edad,sexo="i",hambre = false)
{
    this.tipo = tipo;
    this.edad = edad;
    this.sexo = sexo;
    this.hambre = hambre;
}

const ani = new Animal("animal",10,"machito",undefined);
console.log(ani);

Animal.prototype.saludar=function(){
    console.log("soy un animal de tipo " + this.getTipo()+" y mi sexo es "+this.getSexo());
}

Animal.prototype.getTipo=function(){
    return this.tipo;
}
Animal.prototype.getEdad=function(){
    return this.tipo;
}
Animal.prototype.getSexo=function(){
    return this.sexo;
}

Animal.prototype.setTipo=function(value){
    this.tipo = value;
}
Animal.prototype.setSexo=function(value){
    this.sexo = value;
}
Animal.prototype.setEdad=function(value){
    this.edad = value;
}
ani.saludar();

//HERENCIA
function Mascota(nombre,tipo,edad,sexo,hambre)
{
    this._nombre = nombre;
    Animal.call(this,tipo,edad,sexo,hambre);
}
//hacemos que Mascota tenga el prototype de animal, sino hereda directo de Object
Object.setPrototypeOf(Mascota.prototype,Animal.prototype);
//Sobreescribimos el metodo SALUDAR de Animal en Mascota, entonces
//cuando llamamos a saludar desde un objeto Animal actua de una manera
// y si lo llamamos desde un obj Mascota, actua de otra

Mascota.prototype.saludar = function(){
    console.log("Tengo el nombre de " + this._nombre + " soy un animal de tipo " + this.getTipo()+" y mi sexo es "+this.getSexo());
};

const mascota = new Mascota("Kitty","gato",8,"Femenino",true);
console.log(mascota);

mascota.saludar();
