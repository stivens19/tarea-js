export class Persona {
     constructor(nombre,apellido,edad,sexo) {
          this.nombre=nombre;
          this.apellido=apellido;
          this.edad=edad;
          this.sexo=sexo;
     }
     get tipo(){
          return this.tipoPersona();
     }
     tipoPersona(){
          if (this.edad>=18) {
               return `Mayor de edad`;
          } else {
               return `Menor de edad`;
          }
     }
     get saludo(){
          return (`Hola mi nombre es : ${this.nombre} ${this.apellido}`)
     }
}
/*
let maria=new Persona('Maria','Hurtado',23,'M')
console.log(maria.tipo);
console.log(maria.saludo)*/
