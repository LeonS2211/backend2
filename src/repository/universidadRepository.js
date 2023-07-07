let universidades = [
    {id: 1, descripcion: "Universidad de Lima"},
    {id: 2, descripcion: "Universidad Nacional Mayor de San Marcos"},
    {id: 3, descripcion: "Universidad Peruana Cayetano Heredia"},
    {id: 4, descripcion: "Pontificia Universidad Catolica del Peru"},
    {id: 5, descripcion: "Universidad Nacional de Ingenieria"},
    {id: 6, descripcion: "Universidad del Pacifico"},
    {id: 7, descripcion: "Universidad de San Martin de Porres"}
];


const findAll = () => {
    return universidades;
}


const findOne = (id) => {
    const result = universidades.find(x => x.id == id);
    return result;
}



const universidadesRepository = { findAll, findOne};

export default universidadesRepository; 
