let citas = [
    {   id: 1,
        idPersonaDocente: 2, 
        idPersonaAlumno: 1, 
        Fecha: "6/07/2023", 
        horainicio: "10:00 am", 
        horafin:"10:30 am", 
        enlaceSesion:"https://www.flaticon.es/icono-gratis/enlace_1063309", 
        estado:"pendiente", 
        idCurso: 1},
    {   id: 1,
        idPersonaDocente: 2, 
        idPersonaAlumno: 5, 
        Fecha: "6/07/2023", 
        horainicio: "10:30 am", 
        horafin:"11:00 am", 
        enlaceSesion:"https://www.flaticon.es/icono-gratis/enlace_1063309", 
        estado:"pendiente", 
        idCurso: 1},
];

let counter = 2;

const findAll = () => {
    return citas;
}

const create = (Cita) => {
    counter++;
    const newCita = {...Cita, id: counter}
    citas.push(newCita);
    return Cita;
}

const findOne = (id) => {
    const result = citas.find(x => x.id == id);
    return result;
}


const remove = (id) => {
    const index = citas.findIndex(item => item.id == id)
    
    if (index > -1) {
        citas.splice(index, 1)
        return true;
    } else
    return false;
        
}


const CitasRepository = { findAll, create, findOne, remove };

export default CitasRepository; 
