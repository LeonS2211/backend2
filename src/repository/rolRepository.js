let roles = [
    {id: 1, descripcion: "Alumno"},
    {id: 2, descripcion: "Profesor"}
];


const findAll = () => {
    return roles;
}


const findOne = (id) => {
    const result = roles.find(x => x.id == id);
    return result;
}



const rolesRepository = { findAll, findOne};

export default rolesRepository; 
