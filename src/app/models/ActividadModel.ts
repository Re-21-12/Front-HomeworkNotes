import  {Materium} from './MateriumModel'
export interface Actividad {
    id?: number;
    nombre: string;
    tipo: string;
    nota: number;
    estado:string;
    materia: string;
    fechaEntrega:string;
    materiaNavigation?: Materium
  }
  
  