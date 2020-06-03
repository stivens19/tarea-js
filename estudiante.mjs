import {Persona} from './persona.mjs';

export class Estudiante extends Persona {
     constructor(nombre,apellido,edad,sexo,cmatricula,carrera) {
          super(nombre,apellido,edad,sexo);
          this.cmatricula=cmatricula;
          this.carrera=carrera;
     }
     get valido(){
          return this.validaLongitud();
     }
     validaLongitud(){
          if (this.cmatricula.length>11) {
               return `Codigo invalido`;
          } else {
               return `Codigo validado correctamente`;
          }
     }
     get saludoE(){

          return (`Mi nombre es ${this.nombre} soy estudiante de   : ${this.carrera} identificado con CM ${this.cmatricula}`)
          
     }
}