let cursos = [
    {id: 1, nombre: "Estructuras de Datos y Algoritmos", idCarrera: 1},
    {id: 2, nombre: "Bases de Datos", idCarrera: 1},
    {id: 3, nombre: "Derecho Constitucional", idCarrera: 2},
    {id: 4, nombre: "Derecho Penal", idCarrera: 2},
    {id: 5, nombre: "Periodismo Digital", idCarrera: 3},
    {id: 6, nombre: "Comunicación Organizacional", idCarrera: 3},
    {id: 7, nombre: "Historia del Arte", idCarrera: 4},
    {id: 8, nombre: "Pintura y Dibujo", idCarrera: 4},
    {id: 9, nombre: "Antropología Cultural", idCarrera: 5},
    {id: 10, nombre: "Arqueología Social", idCarrera: 5},
    {id: 11, nombre: "Métodos de Excavación Arqueológica", idCarrera: 6},
    {id: 12, nombre: "Conservación y Restauración de Artefactos Arqueológicos", idCarrera: 6},
    {id: 13, nombre: "Odontología Preventiva", idCarrera: 7},
    {id: 14, nombre: "Endodoncia", idCarrera: 7},
    {id: 15, nombre: "Genética", idCarrera: 8},
    {id: 16, nombre: "Ecología", idCarrera: 8},
    {id: 17, nombre: "Didáctica de la Lengua y Literatura", idCarrera: 9},
    {id: 18, nombre: "Matemáticas para Educación Primaria", idCarrera: 9},
    {id: 19, nombre: "Técnica de Ballet Clásico", idCarrera: 10},
    {id: 20, nombre: "Danzas Folklóricas", idCarrera: 10},
    {id: 21, nombre: "Derecho Civil", idCarrera: 11},
    {id: 22, nombre: "Derecho Internacional", idCarrera: 11},
    {id: 23, nombre: "Educación Musical", idCarrera: 12},
    {id: 24, nombre: "Artes Plásticas y Visuales", idCarrera: 12},
    {id: 25, nombre: "Mecánica de Suelos", idCarrera: 13},
    {id: 26, nombre: "Diseño de Estructuras", idCarrera: 13},
    {id: 27, nombre: "Gestión de Residuos y Contaminación", idCarrera: 14},
    {id: 28, nombre: "Evaluación de Impacto Ambiental", idCarrera: 14},
    {id: 29, nombre: "Termodinámica", idCarrera: 15},
    {id: 30, nombre: "Diseño de Máquinas", idCarrera: 15},
    {id: 31, nombre: "Investigación de Mercados", idCarrera: 16},
    {id: 32, nombre: "Branding y Posicionamiento", idCarrera: 16},
    {id: 33, nombre: "Microeconomía", idCarrera: 17},
    {id: 34, nombre: "Macroeconomía", idCarrera: 17},
    {id: 35, nombre: "Análisis Financiero", idCarrera: 18},
    {id: 36, nombre: "Gestión de Riesgos Financieros", idCarrera: 18},
    {id: 37, nombre: "Cuidado Prenatal", idCarrera: 19},
    {id: 38, nombre: "Asistencia al Parto", idCarrera: 19},
    {id: 39, nombre: "Selección y Contratación de Persona", idCarrera: 20},
    {id: 40, nombre: "Gestión del Talento", idCarrera: 20},
    {id: 41, nombre: "Fundamentos de Aviación", idCarrera: 21},
    {id: 42, nombre: "Navegación Aérea", idCarrera: 21}
];


const findAll = () => {
    return cursos;
}


const findOne = (id) => {
    const result = cursos.find(x => x.id == id);
    return result;
}


const CursosRepository = { findAll, findOne};

export default CursosRepository; 
