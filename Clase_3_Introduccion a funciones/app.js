// //esto me sirve si voy a llamar a la funcion en mas de un evento
        //let btn = document.getElementById('botonSaludar');
        // btn.addEventListener("click",handlerClick);
        // function handlerClick()
        // {
        //     alert('HICISTE CLICK LALITOOOO');
        // }

        // //si solo voy a usar la funcion para un solo boton
        // //uso la arrow function porque no es necesario que tenga un nombre
        // let boton = document.getElementById('botonSaludar');
        // boton.addEventListener("click",(e)=>{
        //     console.log(e);
        // });




        // //toma el evento del elemento mas anidado del html,
        // //en este caso seria el boton pero se le puede agregar un tercer
        // //paramentro que, si le pones true (a un elemento que no sea el ultimo)
        // //toma el evento de ese elemento y despues continua con el elemento mas anidado
        // // y si hay otro mas, tambien lo toma
        // let btn2 = document.getElementById('botonSaludar');
        // boton.addEventListener("click",(e)=>{
        //     console.log("click");
        // });

        // let div = document.getElementById('div');
        // boton.addEventListener("click",(e)=>{
        //     console.log("div");
        // });

        // let body = document.getElementById('body');
        // boton.addEventListener("click",(e)=>{
        //     console.log("body");
        // });
        // //propiedad click del elemento
        // btn2.onclick = ()=>{
        //     alert("Hola lalo");
        // }


        //DELEGACION DE EVENTOSS
        //tomas el evento click de toda la ventana web
        //capturas el evento con E y verificas si lo que llamo al evento
        //tiene ese ID, true si es ese o false si no lo es

        window.addEventListener("click",(e)=>{
            if(e.target.matches("#botonSaludar"))
            {
                console.log("Hola como andas?");
            }
            else{
                if(e.target.matches("#botonDespedir"))
                {
                    console.log("Nos vemosss");
                }
            }
        })


