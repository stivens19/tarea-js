import {Persona} from './persona.mjs';
import {Padres} from './padres.mjs';
import {Estudiante} from './estudiante.mjs';
import {Docente} from './docente.mjs';

console.log('=========Persona==========')
let maria=new Persona('Maria','Hurtado',40,'F')
console.log(maria.tipo);
console.log(maria.saludo)


console.log('=========Padres==========')
let padre1=new Padres('Gustavo','Rodriguez',40,'M','Carlos','casado')
console.log(padre1.tipo);
console.log(padre1.saludo)
console.log('---Exclusivo de su clase')
console.log(padre1.estadof);
console.log(padre1.saludoP)

console.log('=========Estudiante==========')
let estudiante1=new Estudiante('Carlos','Rodriguez',20,'M','2017100666H','Ing. Sistemas')
console.log(estudiante1.tipo);
console.log(estudiante1.saludo)
console.log('---Exclusivo de su clase')
console.log(estudiante1.valido);
console.log(estudiante1.saludoE)

console.log('=========Docente==========')
let docente1=new Docente('Jaime','Suasnabar',40,'M','Desarrollo de aplicaciones moviles',15)
console.log(docente1.tipo);
console.log(docente1.saludo)
console.log('---Exclusivo de su clase')
console.log('Sueldo de : '+ docente1.sueldo);
console.log(docente1.saludoD)
