let personaCursos = [
    {id: 1, idPersona: 1, idCurso: 1},
    {id: 2, idPersona: 2, idCurso: 1},
    {id: 3, idPersona: 2, idCurso: 2},
    {id: 4, idPersona: 2, idCurso: 6},
    {id: 5, idPersona: 2, idCurso: 7},
    {id: 6, idPersona: 5, idCurso: 1},
];

let counter = 6

const findAll = () => {
    return personaCursos;
}

const create = (personaCurso) => {
    counter++;
    const newCurso = {...personaCurso, id: counter}
    personaCursos.push(newCurso);
    return personaCurso;
}

const findOne = (id) => {
    const result = personaCursos.find(x => x.id == id);
    return result;
}


const remove = (id) => {
    const index = personaCursos.findIndex(item => item.id == id)
    
    if (index > -1) {
        personaCursos.splice(index, 1)
        return true;
    } else
    return false;
        
}


const personaCursosRepository = { findAll, create, findOne, remove };

export default personaCursosRepository; 
