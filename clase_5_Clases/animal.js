class Animal{
    //Declaras una variable privada y que no tengan acceso
    #hambre;
    constructor(tipo,edad,sexo="i",hambre = false)
    {
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
        this.#hambre = hambre;
    }

    set Sexo(value){
        this.sexo = value;
    }
    get Sexo(){
        return this.sexo;
    }

    set Tipo(value){
        this.tipo = value;
    }

    saludar(){
        console.log("soy un animal de tipo " + this.tipo+" y mi sexo es "+this.sexo);
    }

    
}
export default Animal;