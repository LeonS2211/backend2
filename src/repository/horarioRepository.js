let horarios = [
    {id: 1, idPersona: 2, horainicio: "10:00 am", diaDeLaSemana: "Lunes", horafin: "12:00 am"},
    {id: 2, idPersona: 2, horainicio: "10:00 am", diaDeLaSemana: "Lunes", horafin: "12:00 am"},
    {id: 3, idPersona: 2, horainicio: "10:00 am", diaDeLaSemana: "Jueves", horafin: "12:00 am"},
    {id: 4, idPersona: 3, horainicio: "11:00 am", diaDeLaSemana: "Lunes", horafin: "1:00 pm"},
    {id: 5, idPersona: 3, horainicio: "7:00 pm", diaDeLaSemana: "Martes", horafin: "10:00 pm"}
];

let counter = 5;

const findAll = () => {
    return horarios;
}

const create = (Horario) => {
    counter++;
    const newHorario = {...Horario, id: counter}
    horarios.push(newHorario);
    return Horario;
}

const findOne = (id) => {
    const result = horarios.find(x => x.id == id);
    return result;
}

const remove = (id) => {
    const index = horarios.findIndex(item => item.id == id)
    
    if (index > -1) {
        horarios.splice(index, 1)
        return true;
    } else
    return false;
        
}


const horariosRepository = { findAll, create, findOne, remove };

export default horariosRepository; 
