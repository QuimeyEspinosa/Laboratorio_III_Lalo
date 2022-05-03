const vector = new Array();
const vec1 = [];

const vec2 = new Array(1,2,3,4);
const vec3 = [1,23,4,532,23];

//Copio lo de vec3 a vec2 concatenandolos
// vec2 = vec3.concat(vec3);

const vec4 = [...vec2];

console.log("vec2:",vec2);
console.log("vec3:",vec3);
console.log("vec4:",vec4);


for (const valor of vec4) {
    vec2.push(valor);
}

console.log("vec2 nuevo: ",vec2);

const vec5 = [...vec2, ...vec3];

console.log("vec5: ",vec5);

const vec10 = [1,2,3,1,23,123,23,4,56,2];

//Agregar al principio
vec10.unshift(100000);
console.log("vec10: ",vec10);

//borra el elemento al final del array 
vec10.pop();

//Elimina el primer elemento
vec10.shift();
//Devuleve la primer posicion donde aparece el parametro a buscar
//retorna -1 si no encuentra el elemento
console.log(vec10.indexOf(123));

//splice (splice) Elimina un elemento de una lista
//primer parametro que indice arranca, y segundo cantidad de elementos a borrar en adelante

vec10.splice(5,1);
console.log("vec10: ",vec10);


//slice separa el array y te devuelve los elementos que se especifican en los parametros
//primer paramtro indice inicial(esta includio)
//segundo paramtro indice final(no esta incluido)

const nuevoArray = vec10.slice(2,6);
console.log(nuevoArray);

//reverse, devuelve el array invertido, retorna la referencia al mismo array
const arrayInvertido = nuevoArray.reverse();
console.log("invierto: ",arrayInvertido);

// B - A -> descendiente
// A - B -> ascendente
vec10.sort((a,b)=>{
    return b-a;
})
console.log(vec10);

vec10.forEach((elemento)=>{
    if(elemento == 4)
    {
        console.log("hola");
    }
});


const empleados = [
    {nombre:"Gonzalo",edad:22,sexo:"Masculino"},
    {nombre:"facundo",edad:22,sexo:"Masculino"},
    {nombre:"eliana",edad:22,sexo:"femenino"},
    {nombre:"pachita",edad:22,sexo:"femenino"}

]

const variable = empleados.map((empleado)=>{
    return {nombre: empleado.nombre,sexo: empleado.sexo};
})

console.log(variable);


//filter devuelve un array y recibe un callback
const varones = empleados.filter((empleado)=>
{
    if(empleado.sexo==="Masculino")
    {
        return true;
    }
    return false;
})

//reduce dos parametros, callback
//primer parametro previo, actual,index,array
//si reduce tiene un segundo parametro, el valor de ese parametro lo toma prev
//y actual toma el valor del primer elemento del array

//si no le pongo un segundo parametro a reduce, prev toma el valor del primer elemento del array
//y actual toma el valor del segundo elemento

let total = vec10.reduce((prev,actual)=>{
    return prev + actual;
},0);

console.log(total);