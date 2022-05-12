
//Modulos
//Si quiero exportar muchas cosas individuales se exportan
//asi export{
//     sumar,
//     supCircunferencia,
//     multiplicar
// }
// o agregandoles el export adelante de la funcion

//Si quiero pasar TODO directamente uso 
// export default Calculos = {
// sumar,
// supCircunferencia,
// multiplicar
// };
//Entonces estoy pasando el objeto Calculos a la otra hoja
//y se usa llamando al objeto y con el .Sumar accedes
//al metodo

const PI = 3.1416;

function sumar(a,b){
    return a+b;
}

function supCircunferencia(r){
    return r*r*PI;
}

const multiplicar = (a,b)=>{
    return a*b;
}

export{
    sumar,
    supCircunferencia,
    multiplicar
}