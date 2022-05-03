class Mascota extends Animal{
    constructor(nombre,tipo,edad,sexo,hambre)
    {//asi para llamar al constructor padre de la clase Mascota
        super(tipo,edad,sexo,hambre);
        this.nombre = nombre;
        
    }
}
