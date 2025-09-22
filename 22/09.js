class NombreDeLaClase{
    constructor(atributo){
        this.propiedad=atributo
    }
    metodo(){
        console.log(this.propiedad)
    }
}
let instancia=new NombreDeLaClase("valor")
instancia.metodo()
let variable = instancia.propiedad

class Persona{
    constructor(nombre,edad){
        this.edad=edad
         this.nombre=nombre
    }
    presentarse(){
        console.log("mi nombre es",this.nombre)

    }
}
let Melany = new Persona ("Melany",16)
Melany.presentarse()
