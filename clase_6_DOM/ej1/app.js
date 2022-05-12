//PROPIEDADES DEL HTML
console.log(document.head);
console.log(document.body);
console.log(document.images);

//SELECTORES
console.log(document.getElementById("ListaFrutas"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre").value);


//La diferencia es que se le pone el selector que tiene CSS
// .(punto) para clases
// # (Numeral) para ID

console.log(document.querySelector("#ListaFrutas"));
console.log(document.querySelector(".card")); //Trae el primer elemento que encuentra
console.log(document.querySelectorAll(".card")); //Trae la lista de elementos con la misma clase
console.log(document.querySelectorAll("nav>a")); 

//ATRIBUTOS

const $linkGoogle = document.querySelector("a");
//agrega un atributo al elemento
$linkGoogle.setAttribute("href","https://google.com.ar");
//$linkGoogle.setAttribute("target","_blank");

$linkGoogle.target = "_blank";

//consulta si tiene el atributo
console.log($linkGoogle.hasAttribute("rel"));
$linkGoogle.setAttribute("rel",true);
console.log($linkGoogle.hasAttribute("rel"));


if($linkGoogle.hasAttribute("rel"))
{
    //Elimina el atributo
    $linkGoogle.removeAttribute("rel");
}
console.log($linkGoogle.hasAttribute("rel"));


//ATRIBUTOS PERSONALIZADOS
// Al elemento se le agrega en la etiquetaa
// un data-(El nombombre que le quieras poner))

const $titulo = document.querySelector("h1");
console.log($titulo.dataset.descripcion);

//Obtener un atributo personalizado
console.log($titulo.getAttribute("data-descripcion"));

$miDiv = document.getElementById("miDiv");
$miParrafo = document.getElementById("p1");

//Agregar contenido texto a un parrafo
$miParrafo.textContent = "Hola gonzalo como estas?";

//Para que interprete HTML como string
$miDiv.innerHTML = "<p>Hola lalitoo</p>";

$miDiv.textContent = `Esto es un template string`;

$cards = document.querySelector(".cards");
//Para traerte los elementos hijos de la clase cards
console.log($cards.children);

//para traerte el primer hijo del elemento
console.log($cards.firstElementChild);
//ultimo hijo del elemento
console.log($cards.lastElementChild);

//Te trae el elemento anterior, osea al hermano
console.log($cards.previousElementSibling);
//Te trae el elemento siguiente, osea al hermano
console.log($cards.nextElementSibling);


//CREACION TOTAL DE UN ELEMENTO IMAGEN CON LA IMAGEN Y EL FIGCAPTION
//Y POR ULTIMO SE AGREGA AL ELEMENTO CARD
const $figure = document.createElement("figure");
const $imagen = document.createElement("img");
$imagen.setAttribute("src","https://placeimg.com/200/200/animals");
$imagen.alt="imagen de animal";

const $figCaption = document.createElement("figcaption");

const $texto = document.createTextNode("Animal Creado");

$figCaption.appendChild($texto);



$figure.appendChild($imagen);
$figure.appendChild($figCaption);

$cards.appendChild($figure);






