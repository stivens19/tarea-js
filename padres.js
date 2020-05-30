import {Persona} from './persona.mjs';

export class Padres extends Persona {
     constructor(nombre,apellido,edad,sexo,nomhijo,estado) {
          super(nombre,apellido,edad,sexo);
          this.nomhijo=nomhijo;
          this.estado=estado;
     }
     get estadof(){
          return this.identificaEstado();
     }
     identificaEstado(){
          if (this.estado>='casado') {
               return `Eres casado lo sentimos por ti`;
          } else {
               return `Eres soltero disfrutalo`;
          }
     }
     get saludoP(){
          if (this.sexo==='M') {
               return (`Mi nombre es ${this.nombre} ${this.apellido} Soy padre de : ${this.nomhijo} y soy ${this.estado}`)
          } else {
               return (`Mi nombre es ${this.nombre} ${this.apellido} Soy madre de  : ${this.nombre} y soy ${this.estado}`)
          }
          
     }
}