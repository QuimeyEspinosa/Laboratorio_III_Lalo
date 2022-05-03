//si en el html tenes mas de un formulario, al que le queres obtener el eventro

document.forms[0].addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Hola");
})

function saludar()
{
    console.log("Hola");
}
function despedir()
{
    console.log("nos vemos");
}



document.getElementById("btn").addEventListener("click",saludar);
document.getElementById("btn").addEventListener("click",despedir);