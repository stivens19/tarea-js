import {Persona} from './persona.mjs';

export class Docente extends Persona {
     constructor(nombre,apellido,edad,sexo,estudios,aniosexp) {
          super(nombre,apellido,edad,sexo);
          this.estudios=estudios;
          this.aniosexp=aniosexp;
     }
     get sueldo(){
          return this.calculaSueldo();
     }
     calculaSueldo(){
          let sueldo=1000;
          if (this.aniosexp>=5) {
               sueldo=sueldo+this.aniosexp*100;
               return sueldo;
          } else {
               sueldo=sueldo+this.aniosexp*50;
               return sueldo;
          }
     }
     get saludoD(){
          return `Mi nombre es ${this.nombre} tengo estudios en ${this.estudios} y años de experiencia en docencia ${this.aniosexp} años`;
          
     }
     
}