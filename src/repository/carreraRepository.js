let carreras = [
    {id: 1, nombre: "Ingenieria de Sistemas", idUniversidad: 1},
    {id: 2, nombre: "Derecho", idUniversidad: 1},
    {id: 3, nombre: "Comunicacion", idUniversidad: 1},
    {id: 4, nombre: "Arte", idUniversidad: 2},
    {id: 5, nombre: "Antropologia", idUniversidad: 2},
    {id: 6, nombre: "Arqueologia", idUniversidad: 2},
    {id: 7, nombre: "Estomatologia", idUniversidad: 3},
    {id: 8, nombre: "Biologia", idUniversidad: 3},
    {id: 9, nombre: "Educacion Primaria", idUniversidad: 3},
    {id: 10, nombre: "Danza", idUniversidad: 4},
    {id: 11, nombre: "Derecho", idUniversidad: 4},
    {id: 12, nombre: "Educacion Artistica", idUniversidad: 4},
    {id: 13, nombre: "Ingenieria Civil", idUniversidad: 5},
    {id: 14, nombre: "Ingenieria Ambiental", idUniversidad: 5},
    {id: 15, nombre: "Ingenieria Mecanica", idUniversidad: 5},
    {id: 16, nombre: "Marketing", idUniversidad: 6},
    {id: 17, nombre: "Economia", idUniversidad: 6},
    {id: 18, nombre: "Finanzas", idUniversidad: 6},
    {id: 19, nombre: "Obstetricia", idUniversidad: 7},
    {id: 20, nombre: "Gestion de Recursos Humanos", idUniversidad: 7},
    {id: 21, nombre: "Ciencias Aeronauticas", idUniversidad: 7},
];


const findAll = () => {
    return carreras;
}


const findOne = (id) => {
    const result = carreras.find(x => x.id == id);
    return result;
}


const CarrerasRepository = { findAll, findOne};

export default CarrerasRepository; 
