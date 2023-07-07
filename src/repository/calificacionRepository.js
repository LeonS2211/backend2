let calificaciones = [
    {id: 1, idCita: 1, calificacion: 4.0, comentario: "Buen profe, me ayudo en todo lo que queria"},
    {id: 2, idCita: 2, calificacion: 4.5, comentario: "Excelente profe"},
];

let counter = 2;

const findAll = () => {
    return calificaciones;
}

const create = (Calificacion) => {
    counter++;
    const newCalificacion = {...Calificacion, id: counter}
    calificaciones.push(newCalificacion);
    return Calificacion;
}

const findOne = (id) => {
    const result = calificaciones.find(x => x.id == id);
    return result;
}


const calificacionesRepository = { findAll, create, findOne};

export default calificacionesRepository; 
